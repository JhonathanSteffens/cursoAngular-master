import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {Anuncio} from '../../anuncio/anuncio';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})


export class AnunciosComponent implements OnChanges {

  @Input() anuncios: Anuncio[] = [];
  rows: any[] = [];
  constructor() { }
  // tslint:disable-next-line:typedef
  ngOnChanges(changes: SimpleChanges) {
    if (changes.anuncios){
      this.rows = this.groupColumns(this.anuncios);
    }
  }


  groupColumns(anuncios: Anuncio[]): any[] {
    const newRows = [];

    for (let index = 0; index < anuncios.length; index += 4) {
      newRows.push(anuncios.slice(index, index + 4));
    }
    return newRows;
  }

}
