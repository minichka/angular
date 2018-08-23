import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../../../../model/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { nextTick } from 'q';
import { CourseListService } from '../../../../services/course-list.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public show: Boolean = false;
  public changeItem: CourseListItem;
  constructor(private router: Router, private rote: ActivatedRoute, private courseListService: CourseListService) { }


  //@Input() changeItem: CourseListItem;
  ngOnInit() {
   this.rote.params.subscribe((data)=>{
     if(data['id'] != 'new'){
      this.changeItem = this.courseListService.getItemByID(data['id']);
     }
   });
  }

  save() : void{
    console.log('add new');
    this.router.navigate(['/courses']);
  }
  cancel(){
    this.router.navigate(['/courses']);
  }
}
