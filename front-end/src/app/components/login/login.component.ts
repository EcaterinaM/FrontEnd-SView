import { LoginService, User } from '../../services/login.service';
import { Component } from '@angular/core';
import { Secretary } from '../../model/Secretary.model';

@Component({
  selector: 'login-form',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user = new User('', '');
  public errorMsg = '';
  public loggedIn: boolean;

  constructor(private _service: LoginService) {
    this.loggedIn = true;
  }

  login() {
    this._service.authentificate(this.user)
      .subscribe(
        (data) => this.retrieveData(data),
        (error) => alert("baaaaad"));
  }

  retrieveData(responseData: any) {
    console.log("Successfully logged in");
    let secretary = new Secretary(responseData);

    localStorage.setItem("id", secretary.id.toString());
    this._service.login();

  }
}
