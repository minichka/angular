import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../../../services/course-list.service';
import { CourseListItem } from '../../../../model/course-list-item.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  public changeItem: CourseListItem;
  private item: CourseListItem;
  editCourseForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    length: new FormControl('')
  });
  constructor(private router: Router, 
              private rote: ActivatedRoute, 
              private courseListService: CourseListService) { }



  ngOnInit() {
    this.rote.params.subscribe((data)=>{
      this.courseListService.getItemByID(data['id']).subscribe(course => {
        this.changeItem = course;
      });
    });
  }

  cancel(){
    this.router.navigate(['/courses']);
  }

  onSubmit(){
    console.log(this.editCourseForm.value);
    this.item = {
      id: 0,
      name: this.editCourseForm.value.name,
      description: this.editCourseForm.value.description,
      date: this.editCourseForm.value.date,
      length: this.editCourseForm.value.length,
      isTopRated: false,
      authors: null
    }
    this.courseListService.createCourse(this.item).subscribe( course =>
      console.log('alalal')
    );
    this.router.navigate(['/courses']);
  }
}
