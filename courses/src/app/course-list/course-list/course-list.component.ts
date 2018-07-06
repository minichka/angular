import { Component, OnInit } from '@angular/core';

import { CourseListItem } from '../../model/course-list-item.model';
import { CourseListService } from '../../services/course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItem : CourseListItem[] = [];
  constructor(private courseListService: CourseListService) { }

  ngOnInit() {
    this.courseItem = this.courseListService.getCourseList();
  }

  deleteCourseItem(id: number) : void{
    console.log(id);
  }
}
