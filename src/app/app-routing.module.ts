import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GoToWeatherGuard } from './guards/goToWeather.guard';
import { LeaveWeatherGuard } from './guards/leaveWeather.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LeaveWeatherGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LeaveWeatherGuard]},
  {path: 'weather', component: WeatherComponent, canActivate: [GoToWeatherGuard]},
  {path: '**', redirectTo: 'weather'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
