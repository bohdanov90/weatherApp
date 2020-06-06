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

  logIn(user: User): void {
    this.localStorageService.setLocalStorageItem('weatherAppCurrentUser', user);
  }

  logOut(): void {
    this.localStorageService.removeLocalStorageItem('weatherAppCurrentUser');
  }
}
