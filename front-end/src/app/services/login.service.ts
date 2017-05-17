import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(public email: string,
              public password: string) {
  }
}

var users = [
  new User('elena.hardon@info.uaic.ro', '123456'),
  new User('ecaterina.manolache@info.uaic.ro', '123456')
];

@Injectable()
export class LoginService {

  private loggedIn: boolean = false;

  constructor(private _router: Router) {
  }


  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['home']);
      this.loggedIn = true;
    }

    this.loggedIn = false;

  }

  isLoggedIn() {
    return this.loggedIn;
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }

}
