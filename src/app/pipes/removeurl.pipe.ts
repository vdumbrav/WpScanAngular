import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeurl'
})
export class RemoveurlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;
    return value.replace(/(?:https?):\/\/[\n\S]+/g, 'This WebSite ');
  }

}
