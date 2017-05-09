import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletedots'
})
export class DeletedotsPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.split('.').join('');

  }
}
