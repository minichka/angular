import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  search(item){
    if(item){
      console.log(item);
    }
      
  }
}
