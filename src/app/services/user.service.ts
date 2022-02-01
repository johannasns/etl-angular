import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { User } from '../models/users';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

// l'oggetto sul decorator esiste da Angular 6 
// e serve ad applicare i meccanismi di Tree Shaking sui servizi
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _objectToModel() {
    
  }

  constructor(private _http: HttpClient) {
    console.log('user service creato')
  }
   
   public get(id: number):Observable<User> {
    return this._http.get<IUser>(`${environment.api.url}/users/$(id)`).pipe(
      map(users => users.map(user => new User(user.id, user.email, user.name)))
     )
   }

   public list():Observable<User[]> {
    return this._http.get<IUser[]>(`${environment.api.url}/users`).pipe(
      map(users => users.map(user => new User(user.id, user.email, user.name)))
    );
  }
}
