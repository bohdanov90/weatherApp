import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public getLocalStorage(localStorageName: string): User[] {
    const value = localStorage.getItem(localStorageName);
    return !!value ? JSON.parse(value) : [];
  }

  public setLocalStorageItem(localStorageName: string, user: User): void {
    localStorage.setItem(localStorageName, JSON.stringify([...this.getLocalStorage(localStorageName), user]));
  }

  public removeLocalStorageItem(localStorageName: string): void {
    localStorage.removeItem(localStorageName);
  }
}
