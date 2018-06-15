import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() { }
  public getCourseList() : CourseListItem[] {
    return [
      {
        id: 1,
        title: 'test1',
        creation_date: '16.05.2018',
        duration: 40,
        description: 'description1'
      },
      {
        id: 2,
        title: 'test2',
        creation_date: '16.05.2018',
        duration: 45,
        description: 'description2'
      },
      {
        id: 3,
        title: 'test3',
        creation_date: '16.05.2018',
        duration: 60,
        description: 'description3'
      },
      {
        id: 4,
        title: 'test4',
        creation_date: '16.05.2018',
        duration: 80,
        description: 'description4'
      },
      {
        id: 5,
        title: 'test1',
        creation_date: '16.05.2018',
        duration: 89,
        description: 'description5'
      }
    ];
  }
}
