import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private users: User[] = [];
    
  constructor() { }

  public logIn(login:string){
    console.log('logIn is called');
    let user: User = {
      id: this.users.length + 1,
      login: login
    }
    this.users.push(user);
    console.log(this.users);
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

  public GetUserInfo(user: User): String{
      return user.login;
  }
}
