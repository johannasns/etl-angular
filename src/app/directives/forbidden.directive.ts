import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { forbiddenValidator } from '../validators/string.validators';

@Directive({
  providers: [{
    multi: true,
    provide: NG_VALIDATORS,
    // Se esiste un'istanza della classe, utilizza quella
    useExisting: ForbiddenDirective
  }],
  selector: '[appForbidden]'
})
export class ForbiddenDirective implements Validator {

  constructor() { }

@Input() private _invalidWords!: string;

  public validate(control: AbstractControl): ValidationErrors | null {
      // const fnInterna = forbiddenValidator('boh', 'bah');
      // return fnInterna(control);

      return forbiddenValidator(this._invalidWords)(control);
  }

}
