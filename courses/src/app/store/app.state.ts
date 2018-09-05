import * as auth from './reducers/auth.reduces';
import * as course from './reducers/course.reduces';
import { createFeatureSelector } from '@ngrx/store';


export interface AppState {
  authState: auth.State;
  courseState : course.State
}

export const reducers = {
    auth : auth.reducer,
    course: course.reducer
}

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectCourseState = createFeatureSelector<AppState>('course');
