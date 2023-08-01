import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { Person, ReqResData } from '../../models/reqres';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent {
 // people: Person[] = [];
 //  subscription: Subscription | undefined = undefined;

   reqresData: Observable<ReqResData> | undefined = undefined;

  constructor(private service: ReqresService) {

    this.reqresData = this.service.getData();

    // this.subscription =  this.service.getData().subscribe((response: ReqResData) => {
    //   this.people = response.data;
    // });
  }

  // ngOnDestroy(): void {
  //    this.subscription?.unsubscribe();
  // }

}
