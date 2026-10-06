import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  template: `
    <h1 class="font-titulo text-4xl text-verde">Sugira um órgão para o portal</h1>
    <form [formGroup]="form" (ngSubmit)="enviar()" class="mx-auto mt-4 max-w-md space-y-4">
      @for (c of campos; track c.nome) {
        <div>
          <label [for]="c.nome" class="font-bold text-ciano">{{ c.rotulo }}</label>
          @if (c.nome === 'mensagem') {
            <textarea [id]="c.nome" [formControlName]="c.nome" rows="4" class="w-full rounded-xl border-2 border-verde/50 bg-fundo p-2"></textarea>
          } @else {
            <input [id]="c.nome" [formControlName]="c.nome" [type]="c.tipo" class="w-full rounded-xl border-2 border-verde/50 bg-fundo p-2" />
          }
          @if (form.get(c.nome)?.touched && form.get(c.nome)?.invalid) { <p class="text-sm text-red-400">{{ c.erro }}</p> }
        </div>
      }
      <button type="submit" [disabled]="form.invalid"
              class="rounded-full bg-verde px-6 py-2 font-bold text-noite disabled:cursor-not-allowed disabled:opacity-40">Enviar</button>
      @if (enviado()) { <p class="text-verde">✔ Sinal enviado! (simulação)</p> }
    </form>
  `,
})
export class ContatoPage {
  enviado = signal(false);
  form = inject(FormBuilder).nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });
  campos = [
    { nome: 'nome', rotulo: 'Nome', tipo: 'text', erro: 'Mínimo de 3 letras.' },
    { nome: 'email', rotulo: 'E-mail', tipo: 'email', erro: 'Informe um e-mail válido.' },
    { nome: 'mensagem', rotulo: 'Mensagem', tipo: 'text', erro: 'Mínimo de 10 caracteres.' },
  ];
  enviar() { if (this.form.invalid) return; this.enviado.set(true); this.form.reset(); }
}
