import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: ` <h2>Second Component</h2> `,
  styles: [
    ` h2 {  color: blue; } `  // inline style
  ]
})
export class SecondComponent {

}
