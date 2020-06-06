import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    WeatherComponent,
  ],
  providers: [],
})
export class WeatherModule { }
