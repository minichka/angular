import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy} from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';
import { SearchPipe } from './pipe/search.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal/modal.component';
import { Subscription } from 'rxjs';


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
  constructor(private courseListService: CourseListService, private searchPipe: SearchPipe,private modalService: NgbModal) { }

  ngOnInit() {
    console.log('courseList init');
    this.courseListService.getCourseList(this.countToLoad,'').subscribe(courses => {
      this.courseItem = courses;
    })
  }

  change($event){
    this.getCourseListWithParams = this.courseListService.getCourseList(this.countToLoad,'').subscribe(courses => {
      this.courseItem = courses;
    })
  }
  deleteCourseItem(id: number) : void{
    this.courseListService.deleteItem(id).subscribe(course => {
      console.log('deleted');
    });
  }

  // editCourseItem(item: CourseListItem){
  //   this.changeItem = item;
  // }
  search(searchString: string): void{
    this.getCourseListWithParams = this.courseListService.getCourseList(this.countToLoad,searchString).subscribe(courses =>{
      this.courseItem = courses;
    });
  }

  ngOnDestroy(){
    //this.getCourseListWithParams.unsubscribe();
  }
}
