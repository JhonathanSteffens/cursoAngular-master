import {NgModule} from '@angular/core';
import {AnunciosComponent} from './anuncios.component';
import {CommonModule} from '@angular/common';
import {AnuncioModule} from '../../anuncio/anuncio.module';

@NgModule({
  declarations:  [ AnunciosComponent ],
  imports: [
    CommonModule,
    AnuncioModule
  ],
  exports: [ AnunciosComponent ]

})
export class AnunciosModule {

}
