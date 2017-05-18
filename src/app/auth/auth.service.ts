import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  user: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.user = firebase.auth().currentUser.email;
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  getUser(): string {
    return this.user;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
