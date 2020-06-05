import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  apiKey = '4b02c2bff72b44cd616e770328f27763';
  weather = 'weather';
  main = 'main';
  name = 'name';
  sys = 'sys';

  constructor(private http: HttpClient) { }

  getQuery(city: string): Observable<object> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`);
  }

  getCityName(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.name])
    );
  }

  getCountryName(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.sys].country)
    );
  }

  getCondition(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.weather][0].main)
    );
  }

  getTemp(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.main].temp)
    );
  }

  getHumidity(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.main].humidity)
    );
  }
}
