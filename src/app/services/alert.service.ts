import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new BehaviorSubject<any>(null);

  constructor() {}

  success(message: string): void {
    this.alert$.next({ type: 'success', text: message });
  }

  error(message: string): void {
    this.alert$.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.alert$.asObservable();
  }
}
