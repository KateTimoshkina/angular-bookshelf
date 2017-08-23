import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ]
})
export class CustomMaterialModule {}
