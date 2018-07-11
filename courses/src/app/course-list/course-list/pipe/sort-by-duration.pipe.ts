import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../../../model/course-list-item.model';

@Pipe({
  name: 'sortByDuration'
})
export class SortByDurationPipe implements PipeTransform {

  transform(value: CourseListItem[], args?: any): CourseListItem[] {
    return value.sort(function(a: CourseListItem, b:CourseListItem) {
      return +new Date(b.creation_date) - +new Date(a.creation_date);
  });
  }

}
