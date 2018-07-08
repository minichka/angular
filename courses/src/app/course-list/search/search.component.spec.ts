import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let button;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.search'));
    spyOn(component,'search');
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

    it('search function is called ', () =>{ 
      const hostElement = fixture.nativeElement;
      const input: HTMLInputElement = hostElement.querySelector('input');
      input.value = 'test';
      input.dispatchEvent(new Event('input'));
      button.triggerEventHandler('click',null);
      expect(component.search).toHaveBeenCalled();
      //expect(component.search).toHaveBeenCalledWith('test');
  })

});
