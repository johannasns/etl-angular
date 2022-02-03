import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //facciamo una prorpeità per ogni campo in input
  //queste proprietà accoglieranno tutte le informazioni del campo in input
  public email: string = '';
  public password: string = '';

  constructor() { }
  
  //dentro le () mi vado a passare il parametro dell'NgForm 
  public handleSubmit(form: NgForm): void {
    //faccio un if per dirmi che se il form non è valido , "esci".
    if (form.invalid){
      //invalid mi serve per bloccare "delle chiamate", quindi si bloccherà (sarà true) ogni volta che 
      //un "required" di un campo in input non verrà rispettato.
    return;
    }
    
    console.log(this.email, this.password);
  }

  public ngOnInit(): void {
  }

}

