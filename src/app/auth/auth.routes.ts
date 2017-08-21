import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

export const ROUTES: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    redirectTo: 'sign-in'
  }
];
