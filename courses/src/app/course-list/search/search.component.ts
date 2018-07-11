import { Component, OnInit, NgModule,Output,EventEmitter, Input} from '@angular/core';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [FormsModule]
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Output() searchItem : EventEmitter<String> = new EventEmitter<String>();
  @Input() searchString: string = '';
  constructor() { }

  ngOnInit() {
  }

  search(searchString : string): void{
    if(searchString){
      console.log(searchString);
      this.searchItem.emit(searchString);
    }
      
  }
}
