import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extract',
})
export class ValuesExtractPipe implements PipeTransform {
  transform(value: any) {
    // console.log(Object.values(value));

    return Object.values(value).map((value: any) => {
      if (value.name) {
        return ` ${value.name}`;
      } else {
        return ` ${value}`;
      }
    });
  }
}
