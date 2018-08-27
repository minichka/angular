import { User } from "../../model/user";

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