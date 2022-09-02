import {Component, OnInit} from '@angular/core';
import {USERS} from "../mock-users";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user = USERS[0];
  test = () => {
    console.log('ok')
  };
  username: string = '';
  password: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm(name: string, password: string) {
    console.log(name, ' has login','\npassword is ', password);
  }
}
