import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private apiKey = '4b02c2bff72b44cd616e770328f27763';
  private weather = 'weather';
  private main = 'main';
  private name = 'name';
  private sys = 'sys';

  constructor(private http: HttpClient) { }

  private getQuery(city: string): Observable<object> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`);
  }

  public getCityName(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.name])
    );
  }

  public getCountryName(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.sys].country)
    );
  }

  public getCondition(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.weather][0].main)
    );
  }

  public getTemp(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.main].temp)
    );
  }

  public getHumidity(city: string): Observable<string> {
    return this.getQuery(city).pipe(
      map(response => response[this.main].humidity)
    );
  }
}
