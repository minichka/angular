import { Component, OnInit, Input, Output, EventEmitter, NgModule, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CourseListItem } from '../../model/course-list-item.model';
import { CourseBorderDirective } from './directive/course-boarder.directive';
import { DurationPipe } from './pipe/duration-pipe.pipe';
import { ModalComponent } from './modal/modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [FormsModule],
  declarations: [CourseBorderDirective, DurationPipe],
})
@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  styles: [`.topRate{background-color: #fcf8c7}`],
})
export class CourseListItemComponent implements OnInit {

  @Input() courseItem: CourseListItem;
  @Output() deleteItem : EventEmitter<Number> = new EventEmitter<Number>();
  @ViewChild('deteleModal') deteleModal :ModalComponent;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

 
  delete(){
    this.deleteItem.emit(this.courseItem.id);
  }
  
  open() {
    const modalRef = this.modalService.open(this.deteleModal);
    //modalRef.componentInstance.name = 'World';
  }
}
