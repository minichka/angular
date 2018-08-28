import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthorizationService } from "../../services/authorization.service";
import { Router } from "@angular/router";
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure} from "../user.actions";
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable } from "rxjs";
@Injectable()
export class AuthEffects{
    constructor(
        private actions: Actions,
        private authServer: AuthorizationService,
        private route: Router
    ){}

    @Effect()
    logIn = this.actions.pipe(
        ofType<LogIn>(AuthActionTypes.LOGIN),
        map((action: LogIn) => action.payload),
        switchMap(payload => {
            return this.authServer.logIn(payload.login, payload.password).map(
                user => {
                    return new LogInSuccess({login : user.login});
                }
            )
            .catch( error => {
                return Observable.of(new LogInFailure(error));
            })
            
        })
    )
        
}