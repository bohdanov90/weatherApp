import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  public currentCity = '';
  public isDataReceived = false;
  public cityName$: Observable<string>;
  public country$: Observable<string>;
  public condition$: Observable<string>;
  public temp$: Observable<string>;
  public humidity$: Observable<string>;
  public login: string;

  constructor(
    private networkService: NetworkService,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.login = this.localStorageService.getLocalStorage('weatherAppCurrentUser')[0].login;
  }

  public onSubmit() {
    this.cityName$ = this.networkService.getCityName(this.currentCity);
    this.country$ = this.networkService.getCountryName(this.currentCity);
    this.condition$ = this.networkService.getCondition(this.currentCity);
    this.temp$ = this.networkService.getTemp(this.currentCity);
    this.humidity$ = this.networkService.getHumidity(this.currentCity);
    this.currentCity = '';
    this.isDataReceived = true;
  }

  public onLogOutClick() {
    this.router.navigate(['/login']);
    this.authService.logOut();
  }

}
