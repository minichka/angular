import * as auth from './reducers/auth.reduces';


export interface AppState {
  authState: auth.State;
}