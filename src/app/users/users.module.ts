import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderComponent } from './reader/reader.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  {
    path: 'profile',
    component: ReaderComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    ReaderComponent
  ]
})
export class UsersModule { }
