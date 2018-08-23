import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';
import { SearchPipe } from './pipe/search.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal/modal.component';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItem : CourseListItem[] = [];
  public addCourse : Boolean = false;
  public changeItem: CourseListItem = null;
  constructor(private courseListService: CourseListService, private searchPipe: SearchPipe,private modalService: NgbModal) { }

  ngOnInit() {
    
    this.courseItem = this.courseListService.getCourseList();
  }

  deleteCourseItem(id: number) : void{
    const modalRef = this.modalService.open(ModalComponent);
    //this.courseListService.deleteItem(id);
  }

  // editCourseItem(item: CourseListItem){
  //   this.changeItem = item;
  // }
  search(searchString: string): void{
    if(!searchString){
      this.courseItem = this.courseListService.getCourseList();
    }
    this.courseItem = this.searchPipe.transform(this.courseItem,searchString);
  }

  open() {
    
    //modalRef.componentInstance.name = 'World';
  }
}
