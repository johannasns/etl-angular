import { Injectable } from '@angular/core';

// l'oggetto sul decorator esiste da Angular 6 
// e serve ad applicare i meccanismi di Tree Shaking sui servizi
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    console.log('user service creato')
   }
}
