import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   constructor(private authService: AuthService, private router: Router){}

   onLogin() {
       this.authService.login().subscribe( loggedIn =>
        {
            if(loggedIn){
                this.router.navigate(['products']);
            }
        });

   }
}
