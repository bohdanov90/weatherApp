import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private alertService: AlertService,
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          this.alertService.error(err.error.message);
          return EMPTY;
        })
      );
    }
}
