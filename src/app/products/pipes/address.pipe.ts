import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/product';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Address, ...args: unknown[]): string {
    return "Via " + value.street + " " + value.number;
  }
}

