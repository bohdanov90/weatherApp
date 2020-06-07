import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthService,
      private alertService: AlertService,
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
        if (err.status === 404) {
          this.alertService.error('Sorry, no weather available for this city. You have probably typed it wrong:(');
        }
        return throwError(err.error.message || err.statusText);
      }));
    }
}
