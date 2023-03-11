import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly user = {
    name: 'admin',
    password: 'admin'
  }
  constructor() {}

  public login(username: string, password: string): boolean{
    return this.user.name === username && this.user.password === password;
  }
}