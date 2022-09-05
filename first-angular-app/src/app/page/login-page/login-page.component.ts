import {Component, OnInit} from '@angular/core';
import {USERS} from "../../mock-users";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {appConstant} from "../../app.constant";
import {User} from "../../user";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }

  user = new User();

  ngOnInit(): void {
  }

  submitForm() {
    if (this.verifyUser(this.user.username, this.user.password)) {
      this.router.navigate([appConstant.OVERVIEW_PAGE]).then(r => {
        console.log(r);
      })
    } else {
      alert('用户名或密码错误')
    }
  };

  public verifyUser(name: string, password: string) {
    let result = false;
    USERS.forEach(userItem => {
      if (userItem.username === name && userItem.password === password) {
        result = true;
      }
    })

    return result;
  }
}
