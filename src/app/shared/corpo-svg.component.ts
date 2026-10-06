import { Component, input, output } from '@angular/core';
import { ORGAOS } from '../core/orgaos.data';

@Component({
  selector: 'app-corpo-svg',
  template: `
    <svg viewBox="0 0 200 420" class="mx-auto h-auto w-full max-w-xs drop-shadow-[0_0_14px_#22ff66]" role="group" aria-label="Corpo humano">
      <circle cx="100" cy="42" r="30" fill="#10244a" stroke="#2c4a8a" stroke-width="2" />
      <path fill="#10244a" stroke="#2c4a8a" stroke-width="2"
        d="M70 78h60l26 14 14 120-16 4-10-70-6 100 14 150h-34l-12-130-12 130H64l14-150-6-100-10 70-16-4 14-120z" />
      @for (o of orgaos; track o.id) {
        <path class="organ" [class.visitado]="visitados().includes(o.id)" [attr.d]="o.d" [attr.fill]="o.cor"
              tabindex="0" role="button" [attr.aria-label]="o.nome"
              (click)="escolher.emit(o.id)" (keydown.enter)="escolher.emit(o.id)" />
      }
    </svg>
  `,
})
export class CorpoSvg {
  orgaos = ORGAOS;
  visitados = input<string[]>([]);
  escolher = output<string>();
}
