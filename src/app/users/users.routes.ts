import { Routes } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';
import { AuthGuard } from '../auth/auth.guard';

export const ROUTES: Routes = [
  {
    path: 'profile',
    component: ReaderComponent,
    canActivate: [AuthGuard]
  }
];
