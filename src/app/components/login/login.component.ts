import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateInput } from '../../validators/credsValidator';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { LocalStorageNames } from 'src/app/enums/local-storage-names.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public userValues: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
          validateInput(/[^a-zA-Z0-9]/gi),
        ],
        updateOn: 'blur'
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
          validateInput(/[^a-zA-Z0-9_]/gi),
        ],
        updateOn: 'blur'
      }],
    });
  }

  public submitForm() {
    this.userValues = this.loginForm.value;
    this.userValues.id = Date.now();

    if (this.loginForm.valid) {
      if (this.localStorageService.getLocalStorage(LocalStorageNames.WEATHER_APP_USERS).some(el => {
        return (el.login === this.loginForm.value.login) && (el.password === this.loginForm.value.password);
      })) {
        this.authService.logIn(this.userValues);
        this.router.navigate(['/weather']);
      } else {
        this.alertService.error('Please verify your login and/or password');
      }
    }
  }

  public onSignUpClick() {
    this.router.navigate(['/register']);
  }

}
