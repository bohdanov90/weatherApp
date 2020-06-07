import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new BehaviorSubject<any>(null);

  constructor() {}

  public success(message: string): void {
    this.alert$.next({ type: 'success', text: message });
    setTimeout(() => {
      this.alert$.next(null);
    }, 3500);
  }

  public error(message: string): void {
    this.alert$.next({ type: 'error', text: message });
    setTimeout(() => {
      this.alert$.next(null);
    }, 5000);
  }

  public getMessage(): Observable<any> {
    return this.alert$.asObservable();
  }
}
