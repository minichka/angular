import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseListService } from '../../services/course-list.service';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  const courseService = jasmine.createSpyObj('CourseListService', ['getCourseList']);
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: CourseListService, useValue: courseService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('ngOnInit get list of items',() => {
      component.ngOnInit();
      expect(component.courseItem).toBeTruthy();
  });
});
