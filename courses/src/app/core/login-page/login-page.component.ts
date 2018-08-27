import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { LogIn } from '../../store/user.actions';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  @Output() showLogIn : EventEmitter<User> = new EventEmitter<User>();
  constructor(
    private authService: AuthorizationService, 
    private router: Router,
    private store: Store<User>
  ) { }

  ngOnInit() {
  }
 
  // createUser($event: any){
  //   this.authService.logIn(this.username,this.password).subscribe(
  //     user => {
  //       this.router.navigate(['/courses']);
  //     }
  //   )
  // }
  onSubmit(): void{
    const payload = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
