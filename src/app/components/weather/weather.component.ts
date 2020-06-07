import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LocalStorageNames } from '../../enums/local-storage-names.enum';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  public currentCity = '';
  public login = '';
  public isDataReceived = false;
  public cityName$: Observable<string>;
  public country$: Observable<string>;
  public condition$: Observable<string>;
  public temp$: Observable<string>;
  public humidity$: Observable<string>;

  constructor(
    private networkService: NetworkService,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.login = this.localStorageService.getLocalStorage(LocalStorageNames.WEATHER_APP_CURRENT_USER)[0].login;
  }

  public onSubmit(): void {
    this.defineValues();
    this.currentCity = '';
    this.isDataReceived = true;
  }

  public onLogOutClick(): void {
    this.router.navigate(['/login']);
    this.authService.logOut();
  }

  public defineValues() {
    this.cityName$ = this.networkService.getCityName(this.currentCity);
    this.country$ = this.networkService.getCountryName(this.currentCity);
    this.condition$ = this.networkService.getCondition(this.currentCity);
    this.temp$ = this.networkService.getTemp(this.currentCity);
    this.humidity$ = this.networkService.getHumidity(this.currentCity);
  }
}
