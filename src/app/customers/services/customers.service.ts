import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private subject$: Subject<Customer> = new Subject<Customer>();
  private interval: unknown;
  subjectObservable$ : Observable<Customer>  = new Observable<Customer>() ;
  constructor() {
    this.subjectObservable$ = this.subject$.asObservable();
  }

  start(){
    this.interval = setInterval( () => {
        const nuovoCustomer = { name: 'Customer ' + Math.random(), city: 'City ' + Math.random() };
        this.subject$.next(nuovoCustomer);
    }  , 2000);
  }

  stop(){
    clearInterval(this.interval as number);
  }
}
