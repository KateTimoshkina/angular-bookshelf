import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderComponent } from './reader/reader.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ROUTES as userRoutes } from './users.routes';
import { CustomMaterialModule } from '../core/custom-material.module';
import { PublisherComponent } from './publisher/publisher.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SharedModule,
    CustomMaterialModule
  ],
  declarations: [
    ReaderComponent,
    PublisherComponent
  ]
})
export class UsersModule { }
