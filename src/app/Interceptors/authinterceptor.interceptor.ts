import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token=localStorage.getItem('token')
    if(token){
      let cloneRequest=request.clone({
        headers:request.headers.append('token',token)
      })
      return next.handle(cloneRequest);
    }



    return next.handle(request);
  }
}
