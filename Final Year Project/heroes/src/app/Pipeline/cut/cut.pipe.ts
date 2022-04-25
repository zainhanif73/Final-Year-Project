import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string): string {
    var temp = value.split(" ");
    var returnString:string="";
    for (let i=0 ; i<temp.length ; i++){
        if (i==15){
            return returnString+"...";
        }
        returnString+=temp[i]+" ";
    }
    return returnString;
  }

}
