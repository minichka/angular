import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  public logIn: Boolean;
  ngOnInit() {
    this.logIn = new AuthorizationService().IsAuthenticated();
  }
  
  show(isAuth: boolean){
    this.logIn = isAuth;
  }


}
