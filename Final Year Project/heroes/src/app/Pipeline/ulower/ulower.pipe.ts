import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ulower'
})
export class UlowerPipe implements PipeTransform {

  transform(value: string): string {
    var result=""
    for (var i=0 ; i<value.length ; i++){
      if (i==0)
        result += value[i].toUpperCase();
      else
        result += value[i].toLowerCase();

    }
    return result;
  }

}
