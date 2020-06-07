import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { CommonModule } from '@angular/common';
import { WeatherModule } from './components/weather/weather.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoToWeatherGuard } from './guards/goToWeather.guard';
import { LeaveWeatherGuard } from './guards/leaveWeather.guard';
import { AlertModule } from './components/alert/alert.module';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    WeatherModule,
    HttpClientModule,
    AlertModule,
  ],
  providers: [
    GoToWeatherGuard,
    LeaveWeatherGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
