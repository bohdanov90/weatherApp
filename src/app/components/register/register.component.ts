import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateInput } from '../../validators/credsValidator';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from 'src/app/interfaces/user.interface';
import { AlertService } from '../../services/alert.service';
import { LocalStorageNames } from 'src/app/enums/local-storage-names.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public userValues: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
          validateInput(/[^a-zA-Z ]/gi),
        ],
        updateOn: 'blur'
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email,
        ],
        updateOn: 'blur'
      }],
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
    this.userValues = this.registerForm.value;
    this.userValues.id = Date.now();

    if (this.registerForm.valid) {
      if (this.localStorageService.getLocalStorage(LocalStorageNames.WEATHER_APP_USERS)
        .some(el => el.email === this.registerForm.value.email)) {
          this.alertService.error('This user already exists');
        } else {
          this.localStorageService.setLocalStorageItem(LocalStorageNames.WEATHER_APP_USERS, this.userValues);
          this.alertService.success('Registration successful');
          this.router.navigate(['/login']);
        }
    }
  }

  public onReturnToLoginClick() {
    this.router.navigate(['/login']);
  }
}
