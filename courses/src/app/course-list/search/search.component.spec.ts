import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { tick } from '@angular/core/src/render3';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

    it('search function is called ', fakeAsync(() =>{ 
      //const hostElement = fixture.nativeElement;
      //const input: HTMLInputElement = hostElement.querySelector('input');
      //input.value = 'test';
      //input.dispatchEvent(new Event('input'));
      let spy = spyOn(component,'search');
      button.triggerEventHandler('click',null);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
      //expect(spy).toHaveBeenCalledWith('test');
      
      
  }))

  xit('check binding', () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchItem).toBe('test');

  });

});
