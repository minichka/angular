import { Component, OnInit, Input} from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCourseState, AppState } from '../../store/app.state';
import { CoursesLoadWithPagintion, CourseDelete } from '../../store/actions/course.actions';


const DEFTAULT_LOAD_COUNT = '10';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  getState: Observable<any>;
  @Input() countToLoad : string = DEFTAULT_LOAD_COUNT;
  courseItem : Observable<CourseListItem[]>;
  constructor(private courseListService: CourseListService, 
              private loaderService: LoaderService,
              private store: Store<AppState>
             ) { 
               this.getState = this.store.select(selectCourseState);
             }

  ngOnInit() {
    let payload = {
      count: this.countToLoad,
      search: ''
    }
    this.store.dispatch(new CoursesLoadWithPagintion(payload));

    this.getState.subscribe(state => {
      this.courseItem = state.courses;
    })
  
  }

  change(){
    let payload = {
      count: this.countToLoad,
      search: ''
    }
    this.store.dispatch(new CoursesLoadWithPagintion(payload));
  }
  deleteCourseItem(id: number) : void{
    // this.loaderService.show();
    // this.courseListService.deleteItem(id)
    // .pipe(finalize(() => this.loaderService.hide()))
    // .subscribe(course => {
    //   console.log('deleted');
    // });
    let payload = {
      id: id
    }
    this.store.dispatch(new CourseDelete(payload));
  }

  search(result): void{
    let payload = {
      count: this.countToLoad,
      search: result
    }
    this.store.dispatch(new CoursesLoadWithPagintion(payload));
  }

  
}
