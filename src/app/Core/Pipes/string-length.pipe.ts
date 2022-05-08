import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength'
})
export class StringLengthPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length>=55)
        value=value.substring(0,55)+"..."

    return value;
  }

}
