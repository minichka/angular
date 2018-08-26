import { Component, OnInit, Input, Output, EventEmitter, NgModule, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseBorderDirective } from './directive/course-boarder.directive';
import { DurationPipe } from './pipe/duration-pipe.pipe';
import { Router } from '@angular/router';




@NgModule({
  imports: [FormsModule],
  declarations: [CourseBorderDirective, DurationPipe],
})
@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  styles: [`.topRate{background-color: #fcf8c7}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {

  @Input() courseItem: CourseListItem;
  @Output() deleteItem : EventEmitter<Number> = new EventEmitter<Number>();
  @Output() editItem: EventEmitter<CourseListItem> = new EventEmitter<CourseListItem>();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

 
  delete($event: any){
    this.deleteItem.emit(this.courseItem.id);
  }
  
  edit($event: any){
    //this.editItem.emit(this.courseItem);
    this.router.navigate(['courses',this.courseItem.id]);
  }
}
