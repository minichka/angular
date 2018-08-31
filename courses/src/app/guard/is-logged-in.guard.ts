import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild  {
  constructor(private authService: AuthorizationService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return this.authService.IsAuthenticated();
    console.log(this.authService.IsAuthenticated());
    if(!this.authService.IsAuthenticated()){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean {
    if(!this.authService.IsAuthenticated){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }  
}
