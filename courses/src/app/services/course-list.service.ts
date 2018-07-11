import { Injectable } from '@angular/core';
import { CourseListItem } from '..//model/course-list-item.model';

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
        creation_date: new Date(2018,0o5,20),
        duration: 40,
        description: 'description1',
        top_rated: true
      },
      {
        id: 2,
        title: 'test2',
        creation_date: new Date(2018,0o5,14),
        duration: 45,
        description: 'description2',
        top_rated: false
      },
      {
        id: 3,
        title: 'test3',
        creation_date: new Date(2018,0o5,9),
        duration: 60,
        description: 'description3',
        top_rated: true
      },
      {
        id: 4,
        title: 'test4',
        creation_date: new Date(2018,0o4,16),
        duration: 80,
        description: 'description4',
        top_rated: true
      },
      {
        id: 5,
        title: 'test1',
        creation_date: new Date(2018,0o7,9),
        duration: 89,
        description: 'description5',
        top_rated: false
      }
    ];
  }
}
