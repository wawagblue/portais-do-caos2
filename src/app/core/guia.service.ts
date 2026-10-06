import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from './personagem.model';

@Injectable({ providedIn: 'root' })
export class GuiaService {
  private http = inject(HttpClient);
  buscar(id: number) { return this.http.get<Personagem>(`https://rickandmortyapi.com/api/character/${id}`); }
}
