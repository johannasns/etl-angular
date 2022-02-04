import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenValidator } from 'src/app/validators/string.validators';

@Component({
  selector: 'app-rdf-login',
  templateUrl: './rdf-login.component.html',
  styleUrls: ['./rdf-login.component.scss']
})
export class RdfLoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
      forbiddenValidator('admin@eng.it')
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor() { }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public handleSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.get('email')?.value);
  }

  public ngOnInit(): void {
  }

}
