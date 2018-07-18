import { Directive, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: "[appCourseBorder]"
})
export class CourseBorderDirective{

  //@Input('appCourseBoarder') creationDate: Date;
  @Input() creationDate: Date;

  constructor(private elRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement,'border-color', this.setborderColor(this.creationDate));
}
  private setborderColor(creation_date: Date) : string{

    let color = 'black';
    //creationDate < currentDate && creationDate >= currentDate - 14days - 
    //fresh course (use green border)
    let current_date: Date = new Date();
    
    if(creation_date < current_date &&
       creation_date.valueOf() >= (current_date.valueOf() - 1209600000)){
      color = 'green';
    }
    // //creationDate > currentDate - upcoming course (use blue border)
    else if(creation_date > current_date){
      color = 'blue';
    }

    return color;
  }

}
