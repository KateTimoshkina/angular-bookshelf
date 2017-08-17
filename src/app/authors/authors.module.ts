import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsDetailedComponent } from './authors-detailed/authors-detailed.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsComponent } from './authors.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'authors',
    pathMatch: 'full',
    component: AuthorsListComponent
  },
  {
    path: 'author/:authorId',
    component: AuthorsDetailedComponent
  }
];

@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorsListComponent,
    AuthorsDetailedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthorsModule { }
