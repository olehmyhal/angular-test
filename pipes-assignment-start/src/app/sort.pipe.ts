import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, param: string) {
    return value.sort((a, b) => {
      if(a[param] > b[param]){
        return 1
      } else {
        return -1
      }
    })
  }

}
