import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    RegisterComponent,
  ],
  providers: [],
})
export class RegisterModule { }
