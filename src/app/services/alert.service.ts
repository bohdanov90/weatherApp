import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new BehaviorSubject<any>(null);
  private isKeepDisplayingAlert = false;

  constructor(public router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isKeepDisplayingAlert ? this.isKeepDisplayingAlert = false : this.alert$.next(null);
      }
    });
  }

  success(message: string, isKeepDisplayingAlert = false): void {
    this.isKeepDisplayingAlert = isKeepDisplayingAlert;
    this.alert$.next({ type: 'success', text: message });
  }

  error(message: string, isKeepDisplayingAlert = false): void {
    this.isKeepDisplayingAlert = isKeepDisplayingAlert;
    this.alert$.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.alert$.asObservable();
  }
}
