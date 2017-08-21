import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { ROUTES as authRoutes } from './auth.routes';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {

}
