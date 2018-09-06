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

        case CourseActionTypes.COURSES_LOAD_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                courses: action.payload
            }
        }

        case CourseActionTypes.COURSES_CREATE_SUCCESS: {
            console.log(action.payload.course);
            return {
                ...state,
                courses: [...state.courses, state.courses.push(action.payload.course)]
            }
        }

        case CourseActionTypes.COURSE_UPDATE: {

        }

        case CourseActionTypes.COURSE_DELETE: {
            console.log(action.payload.id);
            return Object.assign({}, state, {
                courses: state.courses.filter(t => t.id !== action.payload.id),
            
            })
        }

        default :{
            return initialState;
        }
    }
}
