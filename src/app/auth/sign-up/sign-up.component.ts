import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errorText: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    let email = form.value['email'];
    let password = form.value['password'];

    this.authService.signUp(email, password)
      .subscribe(
        () => {
          this.router.navigate(['/profile']);
        },
        error => this.errorText = error.error_message
      );
  }

}
