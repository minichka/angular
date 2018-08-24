import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CourseListItem } from '../../model/course-list-item.model';
import { By } from '@angular/platform-browser';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent
  let fixture: ComponentFixture<CourseListItemComponent>;
  const expectedDeletedItem = { id: 35,
    title: 'testtest',
    creation_date: new Date(2018,5,16),
    duration: 40,
    description: 'testetstetest',
    top_rated: true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent],
      imports: [FormsModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    //component.courseItem = expectedDeletedItem;
    fixture.detectChanges();
  });
  
  it('should raise deleted item id',() => {
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
