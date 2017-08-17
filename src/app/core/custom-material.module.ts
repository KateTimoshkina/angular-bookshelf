import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule
  ]
})
export class CustomMaterialModule {}
