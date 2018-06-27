import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,FormsModule

  ],
  declarations: [CourseListComponent, CourseListItemComponent, BreadcrumpsComponent, SearchComponent, PaginationComponent],
  exports: [CourseListComponent]
})
export class CourseListModule { }
