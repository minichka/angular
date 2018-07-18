import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private users: User[] = [];
    
  constructor() { }

  public logIn(login:string){
    let user: User = {
      id: this.users.length + 1,
      login: login
    }
    this.users.push(user);
  }

  public logOut(user: User){
    this.users.forEach(function(el,index,array){
      if(el == user){
        array.splice(index,1);
      }
    });
  }

  public IsAuthenticated(): Boolean{
    return this.users.length != 0;
  }

  public getUserInfo(user: User): String{
      return user.login;
  }

  public getUser(){
    return this.users[0];
  }
}
