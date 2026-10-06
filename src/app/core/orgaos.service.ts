import { computed, Injectable, signal } from '@angular/core';
import { ORGAOS } from './orgaos.data';

@Injectable({ providedIn: 'root' })
export class OrgaosService {
  total = ORGAOS.length;
  visitados = signal<string[]>([]);
  // valores derivados: sempre computed, nunca atualizados na mão
  progresso = computed(() => Math.round((this.visitados().length / this.total) * 100));
  restantes = computed(() => this.total - this.visitados().length);

  visitar(id: string) {
    if (!this.visitados().includes(id)) this.visitados.update(v => [...v, id]);
  }
}
