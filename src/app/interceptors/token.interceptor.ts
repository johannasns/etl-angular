import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone();

    if (this._userService.hasToken()) {
      req.headers.append('Authorization', `Bearer ${this._userService.getToken()}`);
    }

    return next.handle(req);
  }
}

// invoca next.handle e gli rigira la richiesta come immutabile 
// una volta che ho un oggetto clone aggiungo gli header, la chiave authorization e gli darò il valore
// "bearer token"