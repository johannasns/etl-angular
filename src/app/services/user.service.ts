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
import { ILogin } from '../interfaces/login.interface';

const STORAGE_KEY_AUTH_TOKEN = 'auth-token';

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

  public getToken(): string {
    return sessionStorage.getItem(STORAGE_KEY_AUTH_TOKEN) as string;
  }

  public hasToken(): boolean {
    return !!sessionStorage.getItem(STORAGE_KEY_AUTH_TOKEN);
  }

  public list(): Observable<User[]> {
    return this._http.get<IUser[]>(`${environment.api.url}/users`).pipe(
      map(users => users.map(user => this._objToModel(user)))
    );
  }

  public login(email: string, password: string) {
    return this._http.post<ILogin>('https://reqres.in/api/login', {
      email,
      password
    }, {
      // Di default, Angular osserva il "body"
      // In questo modo, quanto emesso sarà l'intero oggetto di
      // risposta, inclusi gli header e lo status code
      observe: 'response'
    }).pipe(
      map(response => {
        if (response.ok) {
          sessionStorage.setItem(STORAGE_KEY_AUTH_TOKEN, response.body?.token as string);
          return true;
        }

        return false;        
      })
    );
  }
}
