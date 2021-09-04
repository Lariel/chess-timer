import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + this.left(value - minutes * 60);
  }

  private left(number): number {
    return number > 9 ? number : '0' + number;
  }

}
