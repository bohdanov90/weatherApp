import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateInput } from '../../validators/credsValidator';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from 'src/app/interfaces/user.interface';

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
    this.userValues = this.registerForm.value;
    this.userValues.id = Date.now();

    if (this.localStorageService.getLocalStorage('weatherAppUsers').some(el => el.email === this.registerForm.value.email)) {
      console.log(' this user already exists');
    } else {
      this.localStorageService.setLocalStorageItem('weatherAppUsers', this.userValues);
      this.router.navigate(['/login']);
    }
  }

  onReturnToLoginClick() {
    this.router.navigate(['/login']);
  }
}
