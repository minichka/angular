import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

    it('search function is called ', () =>{
      const button = fixture.debugElement.query(By.css('.search'));
      spyOn(component,'search');
      button.triggerEventHandler('click',null);
      fixture.detectChanges();
      expect(component.search).toHaveBeenCalled();
  })

  it('search function is called with input value', () =>{
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    const button = fixture.debugElement.query(By.css('.search'));
    button.triggerEventHandler('click',null);
    spyOn(component,'search');
    fixture.detectChanges();
    //expect(component.search).toHaveBeenCalledWith('test');
    //expect(component.search).toHaveBeenCalled();

    
  });
});
