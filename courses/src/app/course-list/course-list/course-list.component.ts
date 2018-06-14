import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItem : CourseListItem[] = [
    {
      id: 1,
      title: 'test1',
      creation_date: new Date(),
      duration: 1,
      description: 'test1'
    },
    {
      id: 1,
      title: 'test1',
      creation_date: new Date(),
      duration: 1,
      description: 'test1'
    },
    {
      id: 1,
      title: 'test1',
      creation_date: new Date(),
      duration: 1,
      description: 'test1'
    },
    {
      id: 1,
      title: 'test1',
      creation_date: new Date(),
      duration: 1,
      description: 'test1'
    },
    {
      id: 1,
      title: 'test1',
      creation_date: new Date(),
      duration: 1,
      description: 'test1'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
