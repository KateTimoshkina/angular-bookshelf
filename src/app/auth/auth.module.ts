import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { ROUTES as authRoutes } from './auth.routes';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../core/custom-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    CustomMaterialModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {

}
