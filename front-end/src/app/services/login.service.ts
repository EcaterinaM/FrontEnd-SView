import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

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

  private backendUrl: String;

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  constructor(private http: Http, private _router: Router) {
    this.backendUrl = "http://localhost:9666/app";
  }

  authentificate(user: User) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      this.backendUrl + '/student/login',
      user,
      {headers: headers})
      .map(res => res.json());
  }

  login() {
      this._router.navigate(['home']);
      this.loggedIn = true;
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
