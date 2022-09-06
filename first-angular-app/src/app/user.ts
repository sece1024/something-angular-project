export class User {

  constructor(username?: string, password?: string) {
    this.username = username;
    this.password = password;
  }

  id: number = 0;
  username: string | undefined = '';
  password: string | undefined = '';
}
