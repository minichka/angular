import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number, args?: any): any {
    if(duration >= 60) {
      if(duration%60 ==0){
        return (duration/60) + 'h'
      } else {
        return Math.floor(duration/60) + 'h ' + (duration - 60) + 'min';
      }
        
    } else {
      return duration + 'mins';
    }
  }

}
