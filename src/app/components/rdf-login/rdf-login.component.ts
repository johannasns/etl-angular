import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rdf-login',
  templateUrl: './rdf-login.component.html',
  styleUrls: ['./rdf-login.component.scss']
})
export class RdfLoginComponent implements OnInit {
  
  public form FormGroup = new FormGroup({
      email = new FormControl("") // prima prende lo stato iniziale
                               // poi si prende un array validators sincrono (opzionale)
                               // e poi ancora un array validators asincroni (opzionale)
  })

  constructor() { }

  ngOnInit(): void {
  }
  
}
