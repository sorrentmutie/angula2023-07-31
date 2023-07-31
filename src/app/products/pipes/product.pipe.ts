import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miaPipe'
})
export class ProductPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
   // if(args && args.length > 0) {
   //   return value.replace(/o/g, args[0] as string);
  //  }
    return value.replace(/o/g, "***");
  }
}
