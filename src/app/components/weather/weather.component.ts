import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentCity = '';
  isDataReceived = false;
  cityName$: Observable<string>;
  country$: Observable<string>;
  condition$: Observable<string>;
  temp$: Observable<string>;
  humidity$: Observable<string>;

  constructor(
    private networkService: NetworkService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.cityName$ = this.networkService.getCityName(this.currentCity);
    this.country$ = this.networkService.getCountryName(this.currentCity);
    this.condition$ = this.networkService.getCondition(this.currentCity);
    this.temp$ = this.networkService.getTemp(this.currentCity);
    this.humidity$ = this.networkService.getHumidity(this.currentCity);
    this.currentCity = '';
    this.isDataReceived = true;
  }

  onLogOutClick() {
    this.router.navigate(['/login']);
  }

}
