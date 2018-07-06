import { Component, OnInit, Input, Output, EventEmitter, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CourseListItem } from '../../model/course-list-item.model';

@NgModule({
  imports: [FormsModule]
})

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() courseItem: CourseListItem;
  @Output() deleteItem : EventEmitter<Number> = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.deleteItem.emit(this.courseItem.id);
  }
}
