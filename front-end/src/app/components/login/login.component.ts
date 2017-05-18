import { LoginService, User } from '../../services/login.service';
import { Component } from '@angular/core';
import { Student } from '../../model/Student.model';

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
    let student = new Student(responseData);

    localStorage.setItem("id", student.id.toString());
    this._service.login();

  }
}
