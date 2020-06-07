import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public logIn(user: User): void {
    this.localStorageService.setLocalStorageItem('weatherAppCurrentUser', user);
  }

  public logOut(): void {
    this.localStorageService.removeLocalStorageItem('weatherAppCurrentUser');
  }

  public isLoggedIn(): boolean {
    return this.localStorageService.getLocalStorage('weatherAppCurrentUser').length > 0 ? true : false;
  }
}
