import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Customer } from 'src/app/customers/models/customer';
import { CustomersService } from 'src/app/customers/services/customers.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  customer: Customer | undefined = undefined;

  constructor(private service: CustomersService,public authService: AuthService, private router: Router){
    this.service.subjectObservable$.subscribe( (customer) => {
      this.customer = customer;
    });
  }

  onLogin(){ this.router.navigate(['login']); }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
