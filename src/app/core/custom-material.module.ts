import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule
  ]
})
export class CustomMaterialModule {}
