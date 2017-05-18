import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  error: any;

  email = 'info@samsonos.com';
  password = '123456';

  constructor(
      private authService: AuthService,
      private routerSevice: Router
  ) { }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password)
    .then(() => {
      this.error = null;
      this.routerSevice.navigate(['/']);
    }).catch((error: any) => {
      this.error = error;
    });
  }
}
