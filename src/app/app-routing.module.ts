import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GoToWeatherGuard } from './guards/goToWeather.guard';
import { LeaveWeatherGuard } from './guards/leaveWeather.guard';
import { Routing } from './enums/routing.enum';

const routes: Routes = [
  {path: Routing.LOGIN, component: LoginComponent, canActivate: [LeaveWeatherGuard]},
  {path: Routing.REGISTER, component: RegisterComponent, canActivate: [LeaveWeatherGuard]},
  {path: Routing.WEATHER, component: WeatherComponent, canActivate: [GoToWeatherGuard]},
  {path: '**', redirectTo: Routing.WEATHER},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
