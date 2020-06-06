import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorageName = 'weatherApp';
  public localStorageData: any = [];

  constructor() {
    this.localStorageData = this.getLocalStorage();
  }

  getLocalStorage(): any {
    const value = localStorage.getItem(this.localStorageName);
    return !!value ? JSON.parse(value) : [];
  }

  setLocalStorage(): any {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.localStorageData));
    return this.localStorageData;
  }
}
