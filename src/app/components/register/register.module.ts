import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    RegisterComponent,
  ],
  providers: [],
})
export class RegisterModule { }
