import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Request, Request2, Recovery, Delivery } from './classes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})

export class RequestsService {

  private requestsUrl = 'api/requests';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }


// Get methods
  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestsUrl)
    .pipe(
      catchError(this.handleError<Request[]>('getRequests', []))
    );
  }

  getRequest(id: number): Observable<Request> {
    const url = `localhost:5050/cloner/requests/${id}`;
    return this.http.get<Request>(url)
    .pipe(
      catchError(this.handleError<Request>('getRequests'))
    );
  }

  getRequestsByUser(userId: number): Observable<Request2[]> {
    const url = `localhost:5050/cloner/requests/${userId}`;
    return this.http.get<Request2[]>(url)
    .pipe(
      catchError(this.handleError<Request2[]>('getRequests', []))
    );
  }


  // Post methods
  sendTempRequest(recepcion: Delivery, userId: number): Observable<number> {
    return this.http
    // .post<number>(`localhost:5050/cloner/recepcion/${userId}`, recepcion, httpOptions)
    .post<number>(`localhost:5050/cloner/recepcion`, recepcion, httpOptions)
    .pipe(
      catchError(this.handleError<number>('newRequest'))
    );
  }

  confirmRequest(requestId: number, userId: number) {
    return this.http
    .post(`api/newRequest/${userId}`, requestId, httpOptions)
    .pipe(
      catchError(this.handleError('newRequest'))
    );
  }

  cancelRequest(id: number) {
    return this.http
    .post<any>('api/cancelRequest', id, httpOptions)
    .pipe(
      catchError(this.handleError<any>('newRequest'))
    );
  }
  startRequest(id: number) {
    return this.http
    .post<any>('api/startRequest', id, httpOptions)
    .pipe(
      catchError(this.handleError<any>('newRequest'))
    );
  }
}
