import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the HttpInterceptorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
   /*  let newer=req.clone({url:'http://www.qq.com'});
    console.log(newer.url) */
    return next.handle(req);
  }
}
