import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnuncioComponent} from './anuncios/anuncio/anuncio.component';
import {AnuncioListComponent} from "./anuncios/anuncio-list/anuncio-list.component";
import {AnuncioListResolver} from "./anuncios/anuncio-list/anuncio-list.resolver";
import {AnuncioFormComponent} from "./anuncios/anuncio-form/anuncio-form.component";

const routes: Routes = [
  {path: 'a/add', component: AnuncioFormComponent},
  {path: 'a/add/:id', component: AnuncioComponent},
  {path: 'u/add', component: AnuncioComponent},
  {path: 'u/add/:id', component: AnuncioComponent},
  {path: 'u/list', component: AnuncioComponent},
  {path: '**', component: AnuncioListComponent, resolve: {anuncios: AnuncioListResolver}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
