import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section class="flex flex-col items-center gap-4 py-12 text-center">
      <div class="portal h-32 w-32 opacity-60"></div>
      <h1 class="font-titulo text-6xl text-verde">404</h1>
      <p>Esse portal levou você para uma dimensão sem página.</p>
      <a routerLink="/" class="rounded-full bg-verde px-6 py-2 font-bold text-noite">Voltar para a dimensão C-137</a>
    </section>
  `,
})
export class NaoEncontradaPage {}
