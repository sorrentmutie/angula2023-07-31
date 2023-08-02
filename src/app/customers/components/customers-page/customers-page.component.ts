import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent {

    customers: Customer[] = [];
    constructor(private service: CustomersService) {
      this.service.subjectObservable$.subscribe( (customer) => {
           this.customers.push(customer);
      });
    }
    onStart(){
      this.service.start();
    }

    onStop(){
      this.service.stop();
    }
}
