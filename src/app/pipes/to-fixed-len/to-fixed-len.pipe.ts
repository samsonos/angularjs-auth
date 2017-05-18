import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixedLen'
})
export class ToFixedLenPipe implements PipeTransform {

  transform(value: any, len: number): any {
    if (value === '' || value === '-') {
      return value;
    } else if (value === 0) {
      return parseFloat(value).toFixed(len);
    } else if (!value) {
      return '-';
    } else {
      return parseFloat(value).toFixed(len);
    }
  }
}
