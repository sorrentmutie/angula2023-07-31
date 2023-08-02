import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  // onKeyUp(event: KeyboardEvent){
  //  const target =  event.target as HTMLInputElement;
  //  console.log(target.value);
  // }


  onKeyUp(value: string){
    console.log(value);
   }

}
