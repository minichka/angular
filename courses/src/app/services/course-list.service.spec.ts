import { TestBed, inject } from '@angular/core/testing';

import { CourseListService } from './course-list.service';

describe('CourseListService', () => {

  let service : CourseListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListService]
    });

    service = new CourseListService();
  });

  it('should be created', inject([CourseListService], (service: CourseListService) => {
    expect(service).toBeTruthy();
  }));

  it('getCourseItem return not an empty array',() =>{
      expect(service.getCourseList.length != 0).toBeTruthy;
  });
});
