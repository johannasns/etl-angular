import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Interfaces
import { IUser } from '../interfaces/user.interface';

// Models
import { User } from '../models/users';

// Rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// L'oggetto sul decorator @Injectable
// esiste da Angular 6 e serve ad applicare i
// meccanismi di Tree Shaking sui servizi
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _objToModel(obj: IUser): User {
    return new User(obj.id, obj.email, obj.name);
  }

  constructor(private _http: HttpClient) {
    console.log('user service creato!!');
  }

  public get(id: number) {
    return this._http.get<IUser>(`${environment.api.url}/users/${id}`).pipe(
      map(user => this._objToModel(user))
    );
  }

  public list(): Observable<User[]> {
    return this._http.get<IUser[]>(`${environment.api.url}/users`).pipe(
      map(users => users.map(user => this._objToModel(user)))
    );
  }
}
