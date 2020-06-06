import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorageName = 'weatherApp';

  constructor() {}

  getLocalStorage(): User[] {
    const value = localStorage.getItem(this.localStorageName);
    return !!value ? JSON.parse(value) : [];
  }

  setLocalStorageItem(user: User): void {
    localStorage.setItem(this.localStorageName, JSON.stringify([...this.getLocalStorage(), user]));
  }
}
