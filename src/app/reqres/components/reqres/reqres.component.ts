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
  reqresData: Observable<ReqResData> | undefined = undefined;
  constructor(private service: ReqresService) {
    this.reqresData = this.service.getData();
  }
}
