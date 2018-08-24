import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../../../model/course-list-item.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: CourseListItem[], searchText: string): CourseListItem[] {
    if(!items) return [];
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
