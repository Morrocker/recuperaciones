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
}
