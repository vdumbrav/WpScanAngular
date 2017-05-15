import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeurltheme'
})
export class RemoveurlthemePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const url = localStorage.getItem('url');
    if (!value) return value;
    return value.replace(url + '/wp-content/themes/', '');
  }

}
