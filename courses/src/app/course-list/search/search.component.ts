import { Component, OnInit, NgModule,Output,EventEmitter, Input} from '@angular/core';
import {FormsModule, FormControl} from '@angular/forms'
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@NgModule({
  imports: [FormsModule]
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Output() searchItems : EventEmitter<String> = new EventEmitter<String>();
  @Input() searchString: string;
  search: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(200))
      .subscribe( result => {
        if(result == ''){
          this.searchItems.emit('');
        }
        else if(result.length > 3){
          this.searchItems.emit(result);
        }
      });
  }

}
