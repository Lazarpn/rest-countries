import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extract',
})
export class ValuesExtractPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return Object.values(value);
  }
}
