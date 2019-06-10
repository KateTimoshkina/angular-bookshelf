import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class CustomMaterialModule {}
