import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeurlplugin'
})
export class RemoveurlpluginPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const url = localStorage.getItem('url');
    if (!value) return value;
    return value.replace(url + '/wp-content/plugins/', '');  }
}
