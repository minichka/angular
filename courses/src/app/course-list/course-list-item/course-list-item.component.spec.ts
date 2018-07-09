import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { By } from '@angular/platform-browser';


// @Component({
//   template: `<app-course-list-item>
//               [courseItem] = "courseItem" (deleteItem)="onDeleteItem($event)"
//             </app-course-list-item>`
// })
// class TestHostCourseListComponenet {
//   public courseItem: CourseListItem = { id: 35,
//                                         title: 'testtest',
//                                         creation_date: '16.05.2018',
//                                         duration: 40,
//                                         description: 'testetstetest'};
//   public id : number = 0;
//   public onDeleteItem(id: number){
//     this.id = id;
//   }
  
// }
describe('CourseListItemComponent', () => {
  //let testComponent: TestHostCourseListComponenet;
  let component: CourseListItemComponent
  //let fixture: ComponentFixture<TestHostCourseListComponenet>;
  let fixture: ComponentFixture<CourseListItemComponent>;
  const expectedDeletedItem = { id: 35,
    title: 'testtest',
    creation_date: '16.05.2018',
    duration: 40,
    description: 'testetstetest'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ CourseListItemComponent, TestHostCourseListComponenet],
      declarations: [ CourseListItemComponent],
      imports: [FormsModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(TestHostCourseListComponenet);
    // testComponent = fixture.componentInstance;
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.courseItem = expectedDeletedItem;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(testComponent).toBeTruthy();
  // });

  
  it('should raise deleted item id',() => {
    //const deleteButton = fixture.debugElement.query(By.css('.delete'));
    //deleteButton.triggerEventHandler('click',null);
    // let deleteButton = fixture.debugElement.nativeElement.querySelector('button');
    // deleteButton.click();
    // fixture.detectChanges();
    //expect(component.id).toEqual(expectedDeletedItem.id);
    let selectedItemId: number;
    component.deleteItem.subscribe((id: number) => selectedItemId = id);
    const deleteButton = fixture.debugElement.query(By.css('.delete'));
    deleteButton.triggerEventHandler('click', null);
    expect(selectedItemId).toBe(expectedDeletedItem.id);

  });

  it('test data binding', () => {
    let title = fixture.nativeElement.querySelector('.title').textContent;
    expect(title).toEqual(expectedDeletedItem.title);
    
  });
});
