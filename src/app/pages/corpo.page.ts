import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ORGAOS } from '../core/orgaos.data';
import { OrgaosService } from '../core/orgaos.service';
import { CorpoSvg } from '../shared/corpo-svg.component';
import { CardOrgao } from '../shared/card-orgao.component';

@Component({
  imports: [CorpoSvg, CardOrgao],
  template: `
    <h1 class="font-titulo text-4xl text-verde">Modelo do corpo</h1>
    <p class="text-sm opacity-80">Clique em um órgão para atravessar o portal.</p>

    <div class="my-3 h-3 overflow-hidden rounded-full bg-fundo" role="progressbar" [attr.aria-valuenow]="svc.progresso()">
      <div class="h-full bg-verde transition-all" [style.width.%]="svc.progresso()"></div>
    </div>
    <p class="mb-4 text-sm text-ciano">{{ svc.visitados().length }} de {{ svc.total }} explorados · faltam {{ svc.restantes() }}</p>

    <div class="grid gap-6 md:grid-cols-2">
      <app-corpo-svg [visitados]="svc.visitados()" (escolher)="abrir($event)" />
      <div class="space-y-3">
        <input type="search" placeholder="Buscar órgão..." (input)="busca.set($any($event.target).value)"
               class="w-full rounded-full border-2 border-verde/50 bg-fundo px-4 py-2 outline-none focus:border-verde" />
        @for (o of filtrados(); track o.id) {
          <app-card-orgao [orgao]="o" [visitado]="svc.visitados().includes(o.id)" (abrir)="abrir($event)" />
        } @empty {
          <p class="py-6 text-center">Nenhum órgão com esse nome neste universo.</p>
        }
      </div>
    </div>
  `,
})
export class CorpoPage {
  svc = inject(OrgaosService);
  private router = inject(Router);
  busca = signal('');
  filtrados = computed(() => {
    const b = this.busca().toLowerCase();
    return ORGAOS.filter(o => o.nome.toLowerCase().includes(b));
  });
  abrir(id: string) { this.router.navigate(['/corpo', id]); }
}
