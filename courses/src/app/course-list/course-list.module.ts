import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [CourseListComponent, CourseListItemComponent, SearchComponent, PaginationComponent],
  exports: [CourseListComponent]
})
export class CourseListModule { }
