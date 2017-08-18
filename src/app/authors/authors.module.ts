import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsDetailedComponent } from './authors-detailed/authors-detailed.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsComponent } from './authors.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ROUTES as AuthorsRoutes } from './authors.routes';

@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorsListComponent,
    AuthorsDetailedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthorsRoutes),
    SharedModule
  ]
})
export class AuthorsModule { }
