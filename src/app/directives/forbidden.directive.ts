import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { forbiddenValidator } from '../validators/string.validators';

@Directive({
  selector: '[appForbidden]'
})
export class ForbiddenDirective implements Validator { 

  constructor() { }

  public validate(control: AbstractControl): ValidationErrors | null {
      forbiddenValidator()
  }

}
