import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let va1 = parseFloat(value);
    let va2 = 0;
    for (let i = 0; i < args.length; i++) {
      console.log(va2 +" + "+ parseFloat(args[i]));
      va2 = va2 + parseFloat(args[i]);
    }
    return va1 + va2;
  }

}
