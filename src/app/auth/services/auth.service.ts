import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, delay, of , tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;
  currentUser: User | undefined = undefined;

  constructor() { }

  login(): Observable<boolean>{
    return of(true)
      .pipe(
        delay(1000),
        tap( x => {
          this.isLogged = true;
          this.currentUser = { name: 'Mario', picture: 'https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg' };
        })
      );
  }

  logout(){
    this.currentUser = undefined;
    this.isLogged = false;
  }

}
