import { Injectable } from '@angular/core';
import { CourseListItem } from '..//model/course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  private courseList: CourseListItem[] = [
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
  constructor() { }
  public getCourseList() : CourseListItem[] {
    return this.courseList;
  }

  public createCourse(title: string, creation_date: Date, duration: number, description: string, top_rated: boolean) : void{
    let item: CourseListItem = {
      id: this.getCourseList().length + 1,
      title: title,
      creation_date: creation_date,
      duration: duration,
      description: description,
      top_rated: top_rated
    };
    this.courseList.push(item);

  }

  public getItemByID(id: number): CourseListItem{
    let item: CourseListItem;
    this.courseList.forEach(function (el) {
      if(el.id == id){
        item == el;
      }
    });
    return item;
  }

  public updateItem(id: number,title: string, creation_date: Date, duration: number, description: string, top_rated: boolean){
   let item: CourseListItem = this.getItemByID(id);
   item.title = title;
   item.creation_date = creation_date;
   item.duration = duration;
   item.description = description;
   item.top_rated = top_rated;
  }

  public deleteItem(id:number){
    console.log('CourseListService.deleteItem is called');
    this.courseList.forEach(function(el, index, array){
      if(el.id == id){
        array.splice(index,1);
      }
    });
    console.log(this.courseList);
  }
}
