import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateInput } from '../../validators/credsValidator';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from 'src/app/interfaces/user.interface';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userValues: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
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

  submitForm() {
    this.userValues = this.registerForm.value;
    this.userValues.id = Date.now();

    if (this.registerForm.valid) {
      if (this.localStorageService.getLocalStorage('weatherAppUsers').some(el => el.email === this.registerForm.value.email)) {
        this.alertService.error('This user already exists');
      } else {
        this.localStorageService.setLocalStorageItem('weatherAppUsers', this.userValues);
        this.alertService.success('Registration successful');
        this.router.navigate(['/login']);
      }
    }
  }

  onReturnToLoginClick() {
    this.router.navigate(['/login']);
  }
}
