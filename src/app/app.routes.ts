import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { CorpoPage } from './pages/corpo.page';
import { DetalhePage } from './pages/detalhe.page';
import { ContatoPage } from './pages/contato.page';
import { NaoEncontradaPage } from './pages/nao-encontrada.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Início' },
  { path: 'corpo', component: CorpoPage, title: 'Corpo humano' },
  { path: 'corpo/:id', component: DetalhePage, title: 'Órgão' },
  { path: 'contato', component: ContatoPage, title: 'Contato' },
  { path: '**', component: NaoEncontradaPage, title: 'Portal perdido' },
];
