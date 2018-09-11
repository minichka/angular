import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Author } from '../../../../../model/author';
import { AuthorService } from '../../../../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    }
  ]
})
export class AuthorComponent implements ControlValueAccessor {

  name: string;
  authors: Author[] = []

  constructor(private authorService: AuthorService) { }

  search(){
    if(this.name.length > 3){
      this.authorService.getAuthorsList(this.name).subscribe(
        data => {
          this.authors = data;
        }
      )
    }
  }

  authorSelected(author: Author){
    this.name = author.name;
    this.authors = [];
  }

  onChange = (_: any) => { };

  writeValue(value: any) { 
    if (value !== undefined) {
        this.name = value; 
    }
    this.onChange(this.name);
}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() {
    console.log('touch');
  }

}
