import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseListService } from '../../services/course-list.service';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  //let courseService: Partial<CourseListService>;
  let getCourseListSpy;
  const testList = [
    {
      id: 1,
      title: 'test1',
      creation_date: '16.05.2018',
      duration: 40,
      description: 'description1'
    },
    {
      id: 2,
      title: 'test2',
      creation_date: '16.05.2018',
      duration: 45,
      description: 'description2'
    }];

    
  beforeEach(async(() => {
    //courseService = {getCourseList: jasmine.createSpy('getCourseList')};
    //courseService.getCourseList.and.returnValue(testList);
    const courseService = jasmine.createSpyObj('CourseListService', ['getCourseList']);
    getCourseListSpy = courseService.getCourseList.and.returnValue(testList);
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

  it('ngOnInit get list of items',() => {
      fixture.detectChanges();
      expect(getCourseListSpy.calls.any()).toBe(true,'getCourseList called');
      expect(component.courseItem).toBe(testList);
  });

  it('ngFor count', () => {
      let divs = fixture.debugElement.queryAll(By.css('app-course-list-item'));
      fixture.detectChanges();
      expect(divs.length).toBe(testList.length);
  });


});
