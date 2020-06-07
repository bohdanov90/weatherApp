import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new BehaviorSubject<any>(null);

  constructor() {}

  success(message: string): void {
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string): void {
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
