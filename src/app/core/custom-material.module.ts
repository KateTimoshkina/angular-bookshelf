import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule
  ]
})
export class CustomMaterialModule {}
