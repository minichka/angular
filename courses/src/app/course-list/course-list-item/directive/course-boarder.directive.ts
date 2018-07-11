import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCourseBoarder]'
})
export class CourseBoarderDirective implements AfterViewInit{

  @Input() creationDate: Date;

  constructor(private elRef: ElementRef) {}
  ngAfterViewInit(): void{
    //creationDate < currentDate && creationDate >= currentDate - 14days - 
    //fresh course (use green border)
    let current_date: Date = new Date();
    if(this.creationDate < current_date &&
       this.creationDate.getDate() >= current_date.getDate() - 14){
      this.elRef.nativeElement.style.border.color = 'green';
    }
    //creationDate > currentDate - upcoming course (use blue border)
    else if(this.creationDate > current_date){
      
    }
  }

}
