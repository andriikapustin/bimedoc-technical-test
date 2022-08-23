import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {
  transform<T>(value: string, data: T, formatter: (value: T) => string): string {
    if (typeof formatter === 'function') {
      return formatter(data);
    }
    return data[value];
  }
}
