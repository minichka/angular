import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy} from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCourseState, AppState } from '../../store/app.state';
import { CoursesLoadWithPagintion } from '../../store/actions/course.actions';


const DEFTAULT_LOAD_COUNT = '10';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy{

  getState: Observable<any>;
  @Input() countToLoad : string = DEFTAULT_LOAD_COUNT;
  courseItem : Observable<CourseListItem[]>;
  private getCourseListWithParams: Subscription;
  constructor(private courseListService: CourseListService, 
              private loaderService: LoaderService,
              private store: Store<AppState>
             ) { 
               this.getState = this.store.select(selectCourseState);
               //this.courseItem = this.store.select(store => store.courseState.courses);
             }

  ngOnInit() {
    let payload = {
      count: this.countToLoad,
      search: ''
    }
    this.store.dispatch(new CoursesLoadWithPagintion(payload));

    this.getState.subscribe(state => {
      console.log(state);
      this.courseItem = state.courses;
    })
  //   this.loaderService.show();
  //   this.courseListService.getCourseList(this.countToLoad,'')
  //   .pipe(finalize(() => this.loaderService.hide()))
  //   .subscribe(courses => {
  //     this.courseItem = courses;
  //   }
  // )
  
  }

  // change($event){
  //   this.loaderService.show();
  //   this.getCourseListWithParams = 
  //   this.courseListService.getCourseList(this.countToLoad,'')
  //   .pipe(finalize(() => this.loaderService.hide()))
  //   .subscribe(courses => {
  //     this.courseItem = courses;
  //   })
  // }
  deleteCourseItem(id: number) : void{
    this.loaderService.show();
    this.courseListService.deleteItem(id)
    .pipe(finalize(() => this.loaderService.hide()))
    .subscribe(course => {
      console.log('deleted');
    });
  }

  // search(result): void{
  //   this.loaderService.show();
  //   this.getCourseListWithParams = this.courseListService
  //       .getCourseList(this.countToLoad,result)
  //       .pipe(finalize(() => this.loaderService.hide()))
  //       .subscribe(courses =>{
  //         this.courseItem = courses;
  //       })
  // }

  ngOnDestroy(){
    //this.getCourseListWithParams.unsubscribe();
  }
}
