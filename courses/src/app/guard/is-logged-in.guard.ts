import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild  {
  constructor(private authService: AuthorizationService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.IsAuthenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.IsAuthenticated();
  }  
}
