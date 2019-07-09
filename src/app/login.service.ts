import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { ILogin, LoginResp } from './login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private requestsUrl = 'api/login';  // URL to web api
  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  requestLogin(login: ILogin): Observable<LoginResp> {
    return this.http
    // .post<LoginResp>(this.requestsUrl, login, httpOptions)
    .post<LoginResp>('localhost:5050/cloner/login', login, httpOptions)
    .pipe(
      catchError(this.handleError<LoginResp>('Login'))
    );
  }

  requestLogin2(login: ILogin): LoginResp {
    const user = login.userId;
    const password = login.password;
    switch ( user ) {
      case 'ignacio@usm.cl': {
        if (password === '1234') {
          return {
            authLogin: true,
            isAdmin: true,
            userId: 1
          };
        } else {
          return {
            authLogin: false,
            isAdmin: false,
            userId: 0
          };
        }
        break;
      }
      case 'israel@usm.cl': {
        if (password === '4321') {
          return {
            authLogin: true,
            isAdmin: false,
            userId: 2
          };
        } else {
          return {
            authLogin: false,
            isAdmin: false,
            userId: 0
          };
        }
        break;
      }
      case 'alvaro@usm.cl': {
        if (password === '9876') {
          return {
            authLogin: true,
            isAdmin: true,
            userId: 3
          };
        } else {
          return {
            authLogin: false,
            isAdmin: false,
            userId: 0
          };
        }
        break;
      }
      default: {
          return {
            authLogin: false,
            isAdmin: false,
            userId: 0
          };
        break;
      }
    }
  }
}
