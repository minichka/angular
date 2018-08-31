import { User } from "../../model/user";
import {All, AuthActionTypes} from "../actions/auth.actions";

export const initialState : State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
}

export interface State{
    isAuthenticated: Boolean,
    user: User | null;
    errorMessage: string | null;
}

export function reducer(state = initialState, action: All){
    switch(action.type){
        case AuthActionTypes.LOGIN_SUCCESS : {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    login: action.payload.login
                },
                errorMessage: null
            }
        }
        case AuthActionTypes.LOGOUT: {
            return initialState;
        }
        default:
            return state;
        }
    }

