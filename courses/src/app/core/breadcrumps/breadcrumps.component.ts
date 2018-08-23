import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.css']
})

export class BreadcrumpsComponent implements OnInit {
  breadcrumbs: string[] = [];

constructor (router: Router) {
	var bc = this.breadcrumbs;
	router.events.subscribe((evt) => {
		if (evt instanceof NavigationCancel) {
			var url = evt.url;
			if (url === '' || url === '/') {
		  		bc.length = 0;
			} else {
				bc.push(evt.url.substr(1));
			}
		}
	});
}
  ngOnInit() {
  }

}
