import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../../../../model/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../../../services/course-list.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoaderService } from '../../../../services/loader.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  newCourseForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    length: new FormControl('')
  });
  private item: CourseListItem;
  constructor(private router: Router, 
              private courseListService: CourseListService, 
              private loaderService: LoaderService) { }

  ngOnInit() {
   
  }

  onSubmit() : void{
    this.loaderService.show();
    console.log(this.newCourseForm.value);
    this.item = {
      id: this.newCourseForm.value.id,
      name: this.newCourseForm.value.name,
      description: this.newCourseForm.value.description,
      date: this.newCourseForm.value.date,
      length: this.newCourseForm.value.length,
      isTopRated: false,
      authors: null
    }
    this.courseListService.createCourse(this.item)
    .pipe(finalize(() => this.loaderService.hide()))
    .subscribe( course =>
      console.log('alalal')
    );
    this.router.navigate(['/courses']);
  }
  cancel(){
    this.router.navigate(['/courses']);
  }
}
