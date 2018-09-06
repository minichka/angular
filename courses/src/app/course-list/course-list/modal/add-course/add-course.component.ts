import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../../../../model/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../../../services/course-list.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { LoaderService } from '../../../../services/loader.service';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { CourseCreate } from '../../../../store/actions/course.actions';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  submitted = false;
  newCourseForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: new FormControl('',[
      Validators.required,
      Validators.maxLength(500)
    ]),
    date: new FormControl('',[
      Validators.required,
      Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i)
    ]),
    length: new FormControl('',[
      Validators.required,
      Validators.pattern('(\d)+')
    ])
  });
  get f() { return this.newCourseForm.controls; }
  //private item: CourseListItem;
  constructor(private router: Router, 
              private loaderService: LoaderService,
              private store: Store<AppState>) { }

  ngOnInit() {
   
  }

  onSubmit() : void{
    this.submitted = true;
    if (this.newCourseForm.invalid) {
      return;
    }
    //this.loaderService.show();
    let payload = {
      item : {
        id: this.newCourseForm.value.id,
        name: this.newCourseForm.value.name,
        description: this.newCourseForm.value.description,
        date: this.newCourseForm.value.date,
        length: this.newCourseForm.value.length,
        isTopRated: false,
        authors: null
      }
    }
    this.store.dispatch(new CourseCreate(payload));
    // this.courseListService.createCourse(this.item)
    // .pipe(finalize(() => this.loaderService.hide()))
    // .subscribe( course =>
    //   console.log('alalal')
    // );
    // this.router.navigate(['/courses']);
  }

  cancel(){
    this.router.navigate(['/courses']);
  }
}
