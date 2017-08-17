import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsItemComponent } from './authors-list/authors-item/authors-item.component';
import { AuthorsDetailedComponent } from './authors-detailed/authors-detailed.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsComponent } from './authors.component';
import { RouterModule, Routes } from '@angular/router';

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
    AuthorsItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorsModule { }
