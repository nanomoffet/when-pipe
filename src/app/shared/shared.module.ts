import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhenPipe } from './pipes/when.pipe';



@NgModule({
  declarations: [WhenPipe],
  imports: [
    CommonModule
  ],
  exports: [
    WhenPipe
  ]
})
export class SharedModule { }
