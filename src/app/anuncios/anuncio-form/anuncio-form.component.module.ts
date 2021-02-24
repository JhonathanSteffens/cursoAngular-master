import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AnuncioFormComponent} from "./anuncio-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {VmessageModule} from "../../vmessage/vmessage.module";

@NgModule({
  declarations: [ AnuncioFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})

export class AnuncioFormModule {

}
