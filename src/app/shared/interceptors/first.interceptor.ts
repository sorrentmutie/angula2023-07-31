import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token = "1234567890";

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("FirstInterceptor");
    console.log(request);

    const newRequest = request.clone({ headers: request.headers.set("Authorization", this.token) });



    return next.handle(newRequest).pipe(tap( x => {
          if(x instanceof HttpResponse) {
            console.log("Response FirstInterceptor");
            console.log(x);}
          }),
          catchError( (err:HttpErrorResponse) => {
            console.log("Error FirstInterceptor");
            console.log(err);
            return throwError(err);
          })
    );
  }
}
