import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): {[key: string]: any} | null {
    debugger;
    if (control.value && control.value.length != 10) {
      return { 'Password Invalid': true };
    }
    return null;
  }


}
