import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoaderService } from '../AppCommon/services/loader.service';

@Injectable({
    providedIn: 'root'
  })
  export class ProgressInterceptor implements HttpInterceptor
  {
    constructor(public loaderService: LoaderService) {}

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            this.loaderService.start();
           return new Observable(subscriber => {
                next.handle(req).subscribe(resp=>{
                    if (resp instanceof HttpResponse) {
                    this.loaderService.stop();
                    subscriber.next(resp);
                    subscriber.complete();
                    }
                   
                })
              });
           
        }
  }