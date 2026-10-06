import { Component, input, output } from '@angular/core';
import { Orgao } from '../core/orgaos.data';

@Component({
  selector: 'app-card-orgao',
  template: `
    <button (click)="abrir.emit(orgao().id)"
            class="flex w-full items-center gap-3 rounded-2xl border-2 border-verde/40 bg-fundo p-3 text-left transition hover:scale-105 hover:border-verde">
      <span class="h-8 w-8 shrink-0 rounded-full" [style.background]="orgao().cor"></span>
      <span class="flex-1 font-titulo text-2xl text-ciano">{{ orgao().nome }}</span>
      <span class="text-sm text-verde">{{ visitado() ? '✔ explorado' : 'entrar no portal' }}</span>
    </button>
  `,
})
export class CardOrgao {
  orgao = input.required<Orgao>();
  visitado = input(false);
  abrir = output<string>();
}
