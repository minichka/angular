import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() username: string;
  @Output() showLogIn : EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }


  createUser(){
    console.log('createUser is called');
    this.authService.logIn(this.username);
    this.showLogIn.emit(this.authService.IsAuthenticated());
  }

}
