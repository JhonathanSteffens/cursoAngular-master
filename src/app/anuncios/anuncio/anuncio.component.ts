import {Component, Input, OnInit} from '@angular/core';

import {Anuncio} from './anuncio';
import {AnuncioService} from "./anuncio.service";

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent implements OnInit {

  @Input() anuncio: Anuncio;
  constructor( private anuncioService: AnuncioService) { }

  ngOnInit(): void {
  }

}
