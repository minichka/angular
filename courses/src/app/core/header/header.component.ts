import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  @Output() logOutEvent: EventEmitter<User>  = new EventEmitter<User>();
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
    
  }

  logOut(user){
    this.authService.logOut(user);
    this.logOutEvent.emit(user);
  }
}
