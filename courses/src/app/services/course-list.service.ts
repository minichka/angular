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

  public getCourseList(count:string, query: string) : Observable<CourseListItem[]>{

    return this.http.get<CourseListItem[]>(`${BASE_URL}`, { params: {count, query} } );
  }

  public createCourse(course: CourseListItem) : Observable <CourseListItem[]>{
    console.log('createCourse');
    return this.http.post<CourseListItem[]>(`${BASE_URL}`, {params: {course}});
  }

  public getItemByID(id: number): Observable<CourseListItem>{
    return this.http.get<CourseListItem>(`${BASE_URL}/${id}`);
  }

  public updateItem(course: CourseListItem) : Observable<CourseListItem>{
    return this.http.put<CourseListItem>(`${BASE_URL}/${course.id}`, {params: course});
  }

  public deleteItem(id:number): Observable<CourseListItem>{
    return this.http.delete<CourseListItem>(`${BASE_URL}/${id}`);
  }
}
