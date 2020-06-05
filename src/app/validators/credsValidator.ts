import { ValidatorFn, AbstractControl } from '@angular/forms';

export function validateInput(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const validation = regExp.test(control.value);
    return validation ? {credsValidator: {value: control.value}} : null;
  };
}
