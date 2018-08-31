import { CourseListService } from "../../services/course-list.service";
import { Router } from "@angular/router";
import { Actions, Effect, ofType} from "@ngrx/effects";
import { CourseActionTypes, CoursesLoadWithPagintion, CourseLoadSuccess} from "../actions/course.actions";
import { tap, map, switchMap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class CoursesEffects {
    constructor( 
        private action: Actions,
        private courseService: CourseListService,
        private Router: Router
    ){}

    @Effect()
    loadWithPagination = this.action.pipe(
        ofType<CoursesLoadWithPagintion>(CourseActionTypes.COURSES_LOAD_PAGINATION),
        map((action: CoursesLoadWithPagintion) => action.payload),
        switchMap((payload) => {
            console.log('test');
            return this.courseService.getCourseList(payload.count,payload.search).map(courses =>{
                return new CourseLoadSuccess();
            }
            );
        })

    )
}
