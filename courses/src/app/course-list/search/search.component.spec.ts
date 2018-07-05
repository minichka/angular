import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

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
  
    expect(component).toBeTruthy();
  });

  //   it('should return value from input', () =>{
  //   const hostElement = fixture.nativeElement;
  //   const nameInput: HTMLInputElement = hostElement.querySelector('input');
  //   //const button: HTMLButtonElement = hostElement.querySelector('button');
  //   nameInput.value = 'testSearchComponent';
  //   nameInput.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   expect(hostElement.search()).toBe(nameInput.value);

  // })
});
