import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-10 border-b border-verde/30 bg-noite/90 backdrop-blur">
      <nav class="mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4">
        <a routerLink="/" class="font-titulo text-3xl tracking-wide text-ciano">🌀 Corpo & Caos</a>
        <button class="text-3xl text-verde md:hidden" aria-label="Abrir menu" (click)="aberto.set(!aberto())">☰</button>
        <ul class="w-full gap-2 md:flex md:w-auto" [class.hidden]="!aberto()">
          @for (i of itens; track i.rota) {
            <li>
              <a [routerLink]="i.rota" routerLinkActive="!bg-verde !text-noite" [routerLinkActiveOptions]="{ exact: i.exato }"
                 (click)="aberto.set(false)"
                 class="block rounded-full px-4 py-2 font-bold text-verde hover:bg-verde/20">{{ i.texto }}</a>
            </li>
          }
        </ul>
      </nav>
    </header>
    <main class="mx-auto max-w-5xl p-4"><router-outlet /></main>
  `,
})
export class App {
  aberto = signal(false);
  itens = [
    { rota: '/', texto: 'Início', exato: true },
    { rota: '/corpo', texto: 'Corpo', exato: false },
    { rota: '/contato', texto: 'Contato', exato: true },
  ];
}
