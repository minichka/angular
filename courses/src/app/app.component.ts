import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  logIn: Boolean;
  user: User;
  ngOnInit() {
    this.logIn = new AuthorizationService().IsAuthenticated();
  }
  
  show(user: User){
    if(user){
      this.logIn = true;
      this.user = user;
    }  
  }

  logOut(user:User){
    this.logIn = false;
    this.user = null;
  }


}
