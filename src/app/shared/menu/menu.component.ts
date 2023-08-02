import { Component } from '@angular/core';
import { Customer } from 'src/app/customers/models/customer';
import { CustomersService } from 'src/app/customers/services/customers.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  customer: Customer | undefined = undefined;

  constructor(private service: CustomersService){
    this.service.subjectObservable$.subscribe( (customer) => {
      this.customer = customer;
    });
  }
}
