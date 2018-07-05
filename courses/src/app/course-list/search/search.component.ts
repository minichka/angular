import { Component, OnInit, NgModule} from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

  search(item : string): string{
    if(item){
      return item;
    }
      
  }
}
