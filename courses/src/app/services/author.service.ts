import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';

const BASE_URL = 'http://localhost:3004/authors';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  public getAuthorsList(query: string) : Observable<Author[]>{

    return this.http.get<Author[]>(`${BASE_URL}`, { params: {query} } );
  }
}
