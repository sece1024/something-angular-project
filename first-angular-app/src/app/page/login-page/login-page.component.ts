import {Component, OnInit} from '@angular/core';
import {USERS} from "../../mock-users";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {appConstant} from "../../app.constant";
import {User} from "../../user";

function verifyUser(name: string, password: string) {
  let result = false;
  USERS.forEach(u=>{
    if (u.username === name && u.password === password){
      console.log(u);
      result = true;
    }
  })

  return result;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }
  user = new User();

  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }

  submitForm(name: string, password: string) {
    if (verifyUser(name, password)) {
      this.router.navigate([appConstant.OVERVIEW_PAGE]).then(r => {
        console.log(r);
      })
    }else {
      alert('用户名或密码错误')
    }
  };
}
