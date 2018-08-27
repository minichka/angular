import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthorizationService } from "../../services/authorization.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthActionTypes, LogIn } from "../user.actions";
import {map} from 'rxjs/operators'


@Injectable()
export class AuthEffects{
    constructor(
        private actions: Actions,
        private authServer: AuthorizationService,
        private route: Router
    ){}

    @Effect()
    logIn: Observable<any> = this.actions
        .ofType(AuthActionTypes.LOGIN)
        .map((action: LogIn) => action.payload)
        .switchMap(payload => {
            
        })
}