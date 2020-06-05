import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [],
})
export class LoginModule { }
