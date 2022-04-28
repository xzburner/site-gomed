import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class ContatoModule { }
