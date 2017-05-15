import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergepipe'
})
export class MergepipePipe implements PipeTransform {
  transform(arr1, arr2) {
    var arr = [];
    arr1.forEach((elt, i) => {
      arr.push({ state: elt, name: arr2[i] });
    });
  }
}
