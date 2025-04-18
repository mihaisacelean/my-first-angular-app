import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {CardComponent} from "./card/card.component";

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    DatePipe
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
