import { Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ORGAOS } from '../core/orgaos.data';
import { OrgaosService } from '../core/orgaos.service';
import { GuiaService } from '../core/guia.service';
import { Personagem } from '../core/personagem.model';
import { AtratorLorenz } from '../shared/atrator-lorenz.component';

@Component({
  imports: [RouterLink, AtratorLorenz],
  template: `
    <section class="abre-portal">
      <a routerLink="/corpo" class="text-verde underline">← Voltar pelo portal</a>
      @if (orgao(); as o) {
        <article class="mt-4 space-y-3 rounded-2xl border-2 border-verde bg-fundo p-4 shadow-[0_0_30px_#7CFF3F55]">
          <h1 class="font-titulo text-5xl text-verde">{{ o.nome }}</h1>
          <h2 class="font-bold text-ciano">Como funciona</h2><p>{{ o.funcao }}</p>
          <h2 class="font-bold text-ciano">Onde entra o caos</h2><p>{{ o.caos }}</p>

          <h2 class="font-bold text-ciano">Seu guia no portal</h2>
          @if (carregando()) { <p class="animate-pulse text-ciano">🌀 Abrindo o portal...</p> }
          @else if (erro()) {
            <div role="alert" class="portal-quebrado flex flex-col items-center gap-2 rounded-xl border-2 border-dashed border-red-500 bg-noite p-4 text-center">
              <div class="portal h-20 w-20 opacity-40"></div>
              <p class="font-titulo text-3xl text-red-500">💥 A rota quebrou!</p>
              <p class="text-red-300">O portal desabou antes de chegar ao guia. Mas o órgão continua aqui.</p>
              <button type="button" (click)="tentarDeNovo()"
                      class="rounded-full bg-verde px-5 py-1 font-bold text-noite hover:scale-105">Reconstruir o portal</button>
            </div>
          }
          @else if (guia(); as g) {
            <div class="flex items-center gap-3">
              <img [src]="g.image" [alt]="g.name" class="h-16 w-16 rounded-full border-2 border-verde" />
              <p><b>{{ g.name }}</b> ({{ g.species }}) guia você por aqui.</p>
            </div>
          }

          <app-atrator [semente]="o.seed" />
          <p class="text-sm opacity-70">Duas trajetórias começam com diferença de 0,001 e se separam: é o efeito borboleta.</p>
        </article>
      } @else {
        <p class="py-10 text-center text-red-400">Esse órgão não existe neste corpo.</p>
      }
    </section>
  `,
})
export class DetalhePage {
  id = input.required<string>(); // vem de /corpo/:id (withComponentInputBinding)
  private orgaos = inject(OrgaosService);
  private guias = inject(GuiaService);
  orgao = computed(() => ORGAOS.find(o => o.id === this.id()));
  guia = signal<Personagem | null>(null);
  carregando = signal(false);
  erro = signal(false);

  constructor() {
    effect(() => {
      const o = this.orgao();
      if (!o) return;
      untracked(() => { this.orgaos.visitar(o.id); this.carregar(o.guiaId); });
    });
  }

  tentarDeNovo() {
    const o = this.orgao();
    if (o) this.carregar(o.guiaId);
  }

  private carregar(guiaId: number) {
    this.carregando.set(true); this.erro.set(false);
    this.guias.buscar(guiaId).subscribe({
      next: g => { this.guia.set(g); this.carregando.set(false); },
      error: () => { this.erro.set(true); this.carregando.set(false); },
    });
  }
}
