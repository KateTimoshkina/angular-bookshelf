import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorText: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    let email = form.value['email'];
    let password = form.value['password'];

    this.authService.signIn(email, password)
      .subscribe(
        () => {
          this.router.navigate(['/profile']);
        },
        error => this.errorText = error.error_message
      );
  }

}
