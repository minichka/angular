import { CourseListItem } from "../../model/course-list-item.model";
import {All, CourseActionTypes} from "../actions/course.actions";

export interface State  {

    courses : CourseListItem[]
    
}

export const initialState: State = {

    courses : []
}

export function reducer(state: State = initialState, action: All) {
    switch(action.type){
        case CourseActionTypes.COURSES_LOAD_PAGINATION: {
            console.log(action.payload);
            return {
                ...state
            }
        }

        case CourseActionTypes.COURSES_LOAD_SUCCESS: {
            return {
                ...state,
                courses: action.payload
            }
        }

        case CourseActionTypes.COURSE_CREATE: {

        }

        case CourseActionTypes.COURSE_UPDATE: {

        }

        case CourseActionTypes.COURSE_DELETE: {

        }

        default :{
            return initialState;
        }
    }
}
