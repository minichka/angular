import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  @Output() showLogIn : EventEmitter<User> = new EventEmitter<User>();
  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit() {
  
  }


  createUser($event: any){
    console.log(localStorage.getItem('currentUser'));
    this.authService.logIn(this.username,this.password).subscribe(
      user => {
        console.log(localStorage.getItem('currentUser'));
        this.router.navigate(['/courses']);
      }
    )

  }

}
