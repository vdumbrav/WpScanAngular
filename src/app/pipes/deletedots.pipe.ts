import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletedots'
})
export class DeletedotsPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    const val = value.split('.').join('');
    return val.split('WordPress ').join('');
  }
}
