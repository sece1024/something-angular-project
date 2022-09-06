import { Injectable } from '@angular/core';
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USERS: User[] = [
    {id: 1, username: 'admin', password: 'admin'},
    {id: 2, username: 'hgx', password: 'pass'},
    {id: 3, username: 'test', password: 'pass'}
  ]
  constructor() { }

  public getUsers(){
    return this.USERS;
  }
}
