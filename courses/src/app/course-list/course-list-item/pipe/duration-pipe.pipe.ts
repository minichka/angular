import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number, args?: any): any {
    if(duration >= 60) {
      if(duration % 60 == 0){
        return (duration/60) + 'h'
      } else {
        var hours = Math.floor(duration/60);
        return hours + 'h ' + (duration - 60*hours) + 'min';
      }
        
    } else {
      return duration + 'mins';
    }
  }

}
