import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdSelectModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSelectModule
  ]
})
export class CustomMaterialModule {}
