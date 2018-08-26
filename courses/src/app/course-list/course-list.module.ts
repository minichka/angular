import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CourseBorderDirective } from './course-list-item/directive/course-boarder.directive';
import { DurationPipe } from './course-list-item/pipe/duration-pipe.pipe';
import { SortByDurationPipe } from './course-list/pipe/sort-by-duration.pipe';
import { SearchPipe } from './course-list/pipe/search.pipe';
import { ModalComponent } from './course-list/modal/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseComponent } from './course-list/modal/add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { EditComponentComponent } from './course-list/modal/edit-component/edit-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent, 
    SearchComponent, 
    PaginationComponent,
    CourseBorderDirective, 
    DurationPipe, 
    SortByDurationPipe, 
    SearchPipe,
    ModalComponent,
    AddCourseComponent,
    EditComponentComponent,
    
  ],
  entryComponents: [ModalComponent],

  providers: [SearchPipe],
  exports: [CourseListComponent],
  
})
export class CourseListModule { }
