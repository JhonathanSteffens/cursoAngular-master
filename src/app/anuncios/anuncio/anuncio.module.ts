import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioComponent} from './anuncio.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AnuncioComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ AnuncioComponent ]
})
export class AnuncioModule{

}
