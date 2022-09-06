import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {appConstant} from "../../app.constant";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-login-modules',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: any = new FormGroup(({
    username: new FormControl(''),
    password: new FormControl('')
  }))
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    let username:string = this.loginForm.get('username')?.value;
    let password:string = this.loginForm.get('password')?.value;
    if (this.verifyUser(username, password)) {
      this.saveCookies(username, password);
      this.router.navigate([appConstant.OVERVIEW_PAGE]).then(r => {
        console.log(r);
      })
    } else {
      alert('用户名或密码错误')
    }
  };

  public verifyUser(name: string | null | undefined, password: string | null | undefined) {
    console.log('username: ', name, '\tpassword: ', password)
    let result = false;
    this.userService.getUsers().forEach(userItem => {
      if (userItem.username === name && userItem.password === password) {
        result = true;
      }
    })

    return result;
  }

  saveCookies(key: string, value: string) {
    this.createCookie(key, value, 7);
  }
  createCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
}
