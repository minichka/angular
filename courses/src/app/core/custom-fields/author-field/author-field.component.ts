import { Component, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-author-field',
  templateUrl: './author-field.component.html',
  styleUrls: ['./author-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorFieldComponent),
      multi: true
    }
  ],
  
})

export class AuthorFieldComponent implements ControlValueAccessor {

  constructor() { }

  writeValue(){}

  registerOnChange(){

    console.log('test');
  }

  registerOnTouched(){
    
  }
}

