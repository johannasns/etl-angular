import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor() { }

  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
    console.log(this.email, this.password);
  }

  public ngOnInit(): void {
  }

}
