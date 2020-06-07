import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interfaces/user.interface';
import { LocalStorageNames } from '../enums/local-storage-names.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public logIn(user: User): void {
    this.localStorageService.setLocalStorageItem(LocalStorageNames.WEATHER_APP_CURRENT_USER, user);
  }

  public logOut(): void {
    this.localStorageService.removeLocalStorageItem(LocalStorageNames.WEATHER_APP_CURRENT_USER);
  }

  public isLoggedIn(): boolean {
    return this.localStorageService.getLocalStorage(LocalStorageNames.WEATHER_APP_CURRENT_USER).length > 0 ? true : false;
  }
}
