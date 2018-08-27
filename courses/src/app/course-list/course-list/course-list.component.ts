import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy} from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';
import { SearchPipe } from './pipe/search.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal/modal.component';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { finalize } from 'rxjs/operators';


const DEFTAULT_LOAD_COUNT = '10';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy{

  @Input() countToLoad : string = DEFTAULT_LOAD_COUNT;
  public courseItem : CourseListItem[] = [];
  private getCourseListWithParams: Subscription;
  constructor(private courseListService: CourseListService, 
              private searchPipe: SearchPipe,
              private modalService: NgbModal,
              private loaderService: LoaderService) { }

  ngOnInit() {
    console.log('courseList init');
    this.loaderService.show();
    this.courseListService.getCourseList(this.countToLoad,'')
    .pipe(finalize(() => this.loaderService.hide()))
    .subscribe(courses => {
      this.courseItem = courses;
    }
  )
  }

  change($event){
    this.loaderService.show();
    this.getCourseListWithParams = 
    this.courseListService.getCourseList(this.countToLoad,'')
    .pipe(finalize(() => this.loaderService.hide()))
    .subscribe(courses => {
      this.courseItem = courses;
    })
  }
  deleteCourseItem(id: number) : void{
    this.loaderService.show();
    this.courseListService.deleteItem(id)
    .pipe(finalize(() => this.loaderService.hide()))
    .subscribe(course => {
      console.log('deleted');
    });
  }

  search(result): void{
    this.loaderService.show();
    this.getCourseListWithParams = this.courseListService
        .getCourseList(this.countToLoad,result)
        .pipe(finalize(() => this.loaderService.hide()))
        .subscribe(courses =>{
          this.courseItem = courses;
        })
  }

  ngOnDestroy(){
    //this.getCourseListWithParams.unsubscribe();
  }
}
