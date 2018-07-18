import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';
import { SearchPipe } from './pipe/search.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItem : CourseListItem[] = [];
  constructor(private courseListService: CourseListService, private searchPipe: SearchPipe) { }

  ngOnInit() {
    this.courseItem = this.courseListService.getCourseList();
  }

  deleteCourseItem(id: number) : void{
    this.courseListService.deleteItem(id);
  }

  search(searchString: string): void{
    if(!searchString){
      this.courseItem = this.courseListService.getCourseList();
    }
    this.courseItem = this.searchPipe.transform(this.courseItem,searchString);
  }
}
