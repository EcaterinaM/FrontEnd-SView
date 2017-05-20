import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

export class User {
  constructor(public email: string,
              public password: string) {
  }
}

@Injectable()
export class LoginService {

  private loggedIn: boolean = false;
  private backendUrl: String;

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  /**
   * Inject Http and Router
   * @param http
   * @param _router
   * backendUrl - is the Url where is the Api
   */
  constructor(private http: Http, private _router: Router) {
    this.backendUrl = "http://localhost:9666/app";
  }

  /**
   * This function makes the request and receive Json with the
   * answer
   *
   * @param user
   * @returns {Observable<R>}
   */
  authentificate(user: User) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      this.backendUrl + '/secretary/login',
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
