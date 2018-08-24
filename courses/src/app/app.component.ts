import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthorizationService){

  }

  title = 'angular';
  user: User;
  ngOnInit() {
    localStorage.clear();
    console.log(localStorage.getItem('currentUser'));
  }
  
  show(user: User){
    if(user){
      this.user = user;
    }  
  }

  logOut(user:User){
    this.user = null;
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
