import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-second',
  template: ` <h2>Second Component</h2> `,
  styles: [
    ` h2 {  color: blue; } `  // inline style
  ]
})
export class SecondComponent {
   constructor(){
    const myObservable = of(1,2,3,4,5,6,7,8,9,10);

    myObservable.pipe(
      filter( (x:number) => x % 2 === 0 ),
      map( (x:number) => x *2)
    ).subscribe( (x:number) => console.log('Observer got a next value: ' + x));


    // const myObserver = {
    //   next: (x:number) => console.log('Observer got a next value: ' + x),
    //   error: (err: any) => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // }


    //  myObservable.subscribe(myObserver);
   }
}


