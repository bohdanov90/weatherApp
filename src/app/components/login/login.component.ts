import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateInput } from '../../validators/credsValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
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
    console.log(this.loginForm.value);
    this.router.navigate(['/weather']);
  }

  onSignUpClick() {
    this.router.navigate(['/register']);
  }

}
