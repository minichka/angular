import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../../../../model/course-list-item.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public show: Boolean = false;
  constructor() { }

  @Input() changeItem: CourseListItem;
  ngOnInit() {
  }

  save() : void{
    console.log('add new');
  }
}
