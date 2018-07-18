import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() username: string;
  @Output() showLogIn : EventEmitter<User> = new EventEmitter<User>();
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }


  createUser(){
    this.authService.logIn(this.username);
    this.showLogIn.emit(this.authService.getUser());
  }

}
