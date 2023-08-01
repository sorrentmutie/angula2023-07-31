import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResData } from '../models/reqres';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private http: HttpClient) {   }

  getData(): Observable<ReqResData> {
    return this.http.get<ReqResData>("https://reqres.in/api/users?page=1");
  }


}
