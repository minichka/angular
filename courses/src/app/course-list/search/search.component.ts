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
  public searchItem: string = '';
  constructor() { }

  ngOnInit() {
  }

  search(item : string): void{
    if(item){
      console.log(item);
    }
      
  }
}
