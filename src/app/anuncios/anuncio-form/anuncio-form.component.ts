import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AnuncioService} from "../anuncio/anuncio.service";
import {Anuncio} from "../anuncio/anuncio";

@Component({
  selector: 'app-anuncio-form',
  templateUrl: 'anuncio-form.component.html',
  styleUrls: [ 'anuncio-form.component.scss']
})
export class AnuncioFormComponent implements OnInit{
  anuncioForm: FormGroup;
  anuncio: Anuncio = new Anuncio();
  constructor(private formBuilder: FormBuilder,
              private anuncioService: AnuncioService,
              private router: Router) {}

  ngOnInit(): void {
    this.anuncioForm = this.formBuilder.group({
      url: ['', Validators.minLength(10)],
      titulo: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      mensagem: ['', [Validators.minLength(3), Validators.maxLength(300)]]
    });
  }

  salvarAnuncio(): void{
    this.anuncio.titulo = this.anuncioForm.get('titulo')?.value;
    this.anuncio.mensagem = this.anuncioForm.get('mensagem')?.value;
    this.anuncio.urlImagem = this.anuncioForm.get('url')?.value;
    this.anuncioService.cadastrar(this.anuncio).subscribe(() => {
      this.router.navigate(['list/a']);
    });
  }
}
