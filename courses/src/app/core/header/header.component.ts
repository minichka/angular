import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {AppState, selectAuthState } from '../../store/app.state'
import { LogOut } from '../../store/actions/auth.actions';
import { User } from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  getState: Observable<any>;
  public isAuthenticated: false;
  public user: User = null;

  constructor(private store: Store<AppState>) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
    })
  }

  logOut(user){
    // this.authService.logOut(user);
    // this.logOutEvent.emit(user);
    this.store.dispatch(new LogOut);
  }
}
