import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const BASE_URL = 'http://localhost:3004/users';
const LOGIN_URL = 'http://localhost:3004/auth/login';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })

}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private users: User[] = [];
    
  constructor(private http: HttpClient) { }

  public logIn(login:string, password: string) : Observable<User>{
    
    console.log('alalal');
    return this.http.post<any>(`${LOGIN_URL}`, {login,password}).pipe( map (data => {
      if(data.user && data.token){
        console.log(data);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
      }
      return data.user;
    }))

    }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${BASE_URL}`);
    
  }

  public logOut(user: User){
    this.users.forEach(function(el,index,array){
      if(el == user){
        array.splice(index,1);
      }
    });
  }

  public IsAuthenticated(): Observable<boolean> | boolean {
    //console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') != null;
  }

  public getUserInfo(user: User): Observable<String> |String{
      return localStorage.getItem('currentUser');
  }

  public getUser(){
    return this.users[0];
  }
}
