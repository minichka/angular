import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../model/user';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { LogIn } from '../../store/actions/auth.actions';



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
    private store: Store<User>
  ) { }

  ngOnInit() {
  }
 
  onSubmit(): void{
    const payload = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
