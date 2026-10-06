import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrgaosService } from '../core/orgaos.service';

@Component({
  imports: [RouterLink],
  template: `
    <section class="flex flex-col items-center gap-6 py-10 text-center">
      <div class="portal h-48 w-48 sm:h-64 sm:w-64"></div>
      <h1 class="font-titulo text-5xl text-ciano drop-shadow-[0_0_12px_#7CFF3F] sm:text-7xl">Corpo Humano: Portais do Caos</h1>
      <p class="max-w-xl">O corpo é um sistema caótico: pequenas causas, grandes efeitos. Clique em um órgão, atravesse o portal e descubra como ele funciona.</p>
      <a routerLink="/corpo" class="rounded-full bg-verde px-6 py-3 font-bold text-noite shadow-[0_0_20px_#7CFF3F] hover:scale-105">Explorar o corpo</a>
      @if (svc.visitados().length) { <p class="text-ciano">Você já explorou {{ svc.progresso() }}% do corpo.</p> }
    </section>
  `,
})
export class HomePage { svc = inject(OrgaosService); }
