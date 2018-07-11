import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CourseBorderDirective } from './course-list-item/directive/course-boarder.directive';
import { DurationPipe } from './course-list-item/pipe/duration-pipe.pipe';
import { SortByDurationPipe } from './course-list/pipe/sort-by-duration.pipe';
import { SearchPipe } from './course-list/pipe/search.pipe';


@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [CourseListComponent, CourseListItemComponent, SearchComponent, PaginationComponent,CourseBorderDirective, DurationPipe, SortByDurationPipe, SearchPipe],
  exports: [CourseListComponent]
})
export class CourseListModule { }
