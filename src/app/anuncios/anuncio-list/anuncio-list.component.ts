import { Component, OnInit } from '@angular/core';
import {Anuncio} from '../anuncio/anuncio';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.scss']
})
export class AnuncioListComponent implements OnInit {
  anuncios: Anuncio[];
  constructor(private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.anuncios = this.activatedRouter.snapshot.data['anuncios'];
  }

}
