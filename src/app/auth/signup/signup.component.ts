import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  error: any;

  constructor(
      private authService: AuthService,
      private routerService: Router
  ) { }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
    .then(() => {
      this.error = null;
      this.routerService.navigate(['/signin']);
    }).catch((error: any) => {
      this.error = error;
    });
  }
}
