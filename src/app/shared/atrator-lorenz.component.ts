import { Component, effect, ElementRef, input, viewChild } from '@angular/core';

/** Duas trajetórias do atrator de Lorenz com diferença inicial de 0,001: o efeito borboleta. */
@Component({
  selector: 'app-atrator',
  template: `<canvas #cv class="block h-64 w-full rounded-xl bg-noite" aria-label="Atrator de Lorenz"></canvas>`,
})
export class AtratorLorenz {
  semente = input(0);
  cv = viewChild<ElementRef<HTMLCanvasElement>>('cv');

  constructor() {
    effect(onCleanup => {
      const el = this.cv()?.nativeElement;
      if (!el) return;
      const s = this.semente();
      el.width = el.clientWidth || 320; el.height = el.clientHeight || 256;
      const ctx = el.getContext('2d')!, w = el.width, h = el.height, k = h / 55;
      const A = [1 + s * 0.7, 1, 1], B = [A[0] + 0.001, 1, 1];
      let raf = 0;
      const passo = (p: number[]) => {
        const [x, y, z] = p, d = 0.006;
        p[0] = x + 10 * (y - x) * d; p[1] = y + (x * (28 - z) - y) * d; p[2] = z + (x * y - (8 / 3) * z) * d;
      };
      const pares: [number[], string][] = [[A, '#7CFF3F'], [B, '#27d9e6']];
      ctx.fillStyle = '#050a1e'; ctx.fillRect(0, 0, w, h);
      const quadro = () => {
        ctx.fillStyle = 'rgba(5,10,30,.07)'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 5; i++) for (const [p, cor] of pares) {
          const x0 = p[0], z0 = p[2]; passo(p);
          ctx.strokeStyle = cor; ctx.lineWidth = 2; ctx.beginPath();
          ctx.moveTo(w / 2 + x0 * k, h * 0.95 - z0 * k); ctx.lineTo(w / 2 + p[0] * k, h * 0.95 - p[2] * k); ctx.stroke();
        }
        raf = requestAnimationFrame(quadro);
      };
      quadro();
      onCleanup(() => cancelAnimationFrame(raf));
    });
  }
}
