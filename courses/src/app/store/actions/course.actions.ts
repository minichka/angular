import { Action } from "@ngrx/store";

export enum CourseActionTypes {
    COURSES_LOAD_ALL = '[Courses] Load ALL',
    COURSES_LOAD_PAGINATION = '[Courese] Load with pagination',
    COURSE_CREATE = '[Course] Create',
    COURSE_UPDATE = '[Course] Update',
    COURSE_DELETE = '[Course] Delete',
    COURSES_LOAD_SUCCESS = '[Courses] Load Success',
    COURSES_LOAD_FAILURE = '[Courses] Load Success',

    
}

export class CoursesLoadALL implements Action {
    readonly type = CourseActionTypes.COURSES_LOAD_ALL;
    constructor(public payload: any){};

}

export class CoursesLoadWithPagintion implements Action{
    readonly type = CourseActionTypes.COURSES_LOAD_PAGINATION;
    constructor(public payload: any){};
}

export class CourseCreate implements Action{
    readonly type = CourseActionTypes.COURSE_CREATE;
    constructor(payload: any){}
}

export class CoursesUpdate implements Action{
    readonly type = CourseActionTypes.COURSE_UPDATE;
    constructor(payload: any){}
}

export class CourseDelete implements Action{
    readonly type = CourseActionTypes.COURSE_DELETE;
    constructor(payload: any){}
}

export class CourseLoadSuccess implements Action{
    readonly type = CourseActionTypes.COURSES_LOAD_SUCCESS;
}
export type All = CoursesLoadALL 
                | CoursesLoadWithPagintion 
                | CourseCreate 
                | CoursesUpdate
                | CourseDelete;
