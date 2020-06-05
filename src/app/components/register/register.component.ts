import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateInput } from '../../validators/credsValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        validateInput(/[^a-zA-Z ]/gi),
      ]],
      email: ['', [ // double check this regex
        Validators.required,
        validateInput(/^\S+@\S+$/),
      ]],
      login: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        validateInput(/[^a-zA-Z0-9]/gi),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        validateInput(/[^a-zA-Z0-9_]/gi),
      ]],
    });
  }

  submitForm() {
    console.log(this.registerForm.value);
  }

}
