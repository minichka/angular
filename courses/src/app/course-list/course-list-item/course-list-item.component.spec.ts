import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { By } from '@angular/platform-browser';


@Component({
  template: `<app-course-list-item>
              [courseItem] = "courseItem" (deleteItem)="onDeleteItem($event)"
            </app-course-list-item>`
})
class TestHostCourseListComponenet {
  public courseItem: CourseListItem = { id: 35,
                                        title: 'testtest',
                                        creation_date: '16.05.2018',
                                        duration: 40,
                                        description: 'testetstetest'};
  public id : number = 0;
  public onDeleteItem(id: number){
    this.id = id;
  }
  
}
describe('CourseListItemComponent', () => {
  let testComponent: TestHostCourseListComponenet;
  let fixture: ComponentFixture<TestHostCourseListComponenet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, TestHostCourseListComponenet],
      imports: [FormsModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostCourseListComponenet);
    testComponent = fixture.componentInstance;
  });

  // it('should create', () => {
  //   expect(testComponent).toBeTruthy();
  // });

  
  xit('should raise deleted item id',() => {
    const expectedDeletedItem = { id: 35,
                          title: 'testtest',
                          creation_date: '16.05.2018',
                          duration: 40,
                          description: 'testetstetest'};
    //const deleteButton = fixture.debugElement.query(By.css('.delete'));
    //deleteButton.triggerEventHandler('click',null);
    let deleteButton = fixture.debugElement.nativeElement.querySelector('button');
    deleteButton.click();
    fixture.detectChanges();
    expect(testComponent.id).toEqual(expectedDeletedItem.id);
  })
});
