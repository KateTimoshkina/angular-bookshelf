import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdIconModule
  ]
})
export class CustomMaterialModule {}
