import { Injectable } from '@angular/core';
import { CourseListItem } from '..//model/course-list-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3004/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor(private http: HttpClient){ }

  public getCourseList(count:string) : Observable<CourseListItem[]>{

    return this.http.get<CourseListItem[]>(`${BASE_URL}`, { params: {count} } );
  }

  // public getUsers(): Observable<User[]>{
  //   return this.http.get<User[]>(`${BASE_URL}`);
    
  // }
  // public createCourse(title: string, creation_date: Date, duration: number, description: string, top_rated: boolean) : void{
  //   let item: CourseListItem = {
  //     id: this.getCourseList().length + 1,
  //     title: title,
  //     creation_date: creation_date,
  //     duration: duration,
  //     description: description,
  //     top_rated: top_rated
  //   };
  //   this.courseList.push(item);

  // }

  // public getItemByID(id: number): CourseListItem{
  //   let item: CourseListItem;
  //   this.courseList.forEach(function (el) {
  //     if(el.id == id){
  //       item = el;
  //     }
  //   });
  //   return item;
  // }

  // public updateItem(id: number,title: string, creation_date: Date, duration: number, description: string, top_rated: boolean){
  //  let item: CourseListItem = this.getItemByID(id);
  //  item.title = title;
  //  item.creation_date = creation_date;
  //  item.duration = duration;
  //  item.description = description;
  //  item.top_rated = top_rated;
  // }

  // public deleteItem(id:number){
  //   console.log('CourseListService.deleteItem is called');
  //   this.courseList.forEach(function(el, index, array){
  //     if(el.id == id){
  //       array.splice(index,1);
  //     }
  //   });
  //   console.log(this.courseList);
  // }
}
