import { CourseListService } from "../../services/course-list.service";
import { Router } from "@angular/router";
import { Actions, Effect, ofType} from "@ngrx/effects";
import { CourseActionTypes, CoursesLoadWithPagintion, CourseLoadSuccess, CourseCreate, CourseCreateSuccess} from "../actions/course.actions";
import { tap, map, switchMap, mergeMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CoursesEffects {
    constructor( 
        private action: Actions,
        private courseService: CourseListService,
        private route: Router
    ){}

    @Effect()
    loadWithPagination = this.action.pipe(
        ofType<CoursesLoadWithPagintion>(CourseActionTypes.COURSES_LOAD_PAGINATION),
        map((action: CoursesLoadWithPagintion) => action.payload),
        switchMap((payload) => {
            return this.courseService.getCourseList(payload.count,payload.search)
                .map(courses => {
                    return new CourseLoadSuccess(courses);
                })
        })

    );

    @Effect()
    addCourse = this.action.pipe(
        ofType<CourseCreate>(CourseActionTypes.COURSE_CREATE),
        map((action:CourseCreate) => action.payload),
        switchMap((payload) => {
            console.log(payload);
            return this.courseService.createCourse(payload.item)
            .map(courses => {
                return new CourseCreateSuccess(courses);
            })
        })
    );

    @Effect ({dispatch : false})
    addCourseSuccess: Observable<any> = this.action.pipe(
        ofType(CourseActionTypes.COURSES_CREATE_SUCCESS),
        tap( () => {
            this.route.navigateByUrl('/courses');
        })
    );
}
