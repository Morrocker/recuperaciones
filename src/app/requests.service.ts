import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Request, Request2, Recovery } from './classes';

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



  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestsUrl)
    .pipe(
      catchError(this.handleError<Request[]>('getRequests', []))
    );
  }

  getRequest(id: number): Observable<Request> {
    const url = `${this.requestsUrl}/${id}`;
    return this.http.get<Request>(url)
    .pipe(
      catchError(this.handleError<Request>('getRequests'))
    );
  }
  getRequestsByUser(userId: number): Observable<Request2[]> {
    return this.http.get<Request2[]>(`api/userreq/?userId=${userId}`)
    .pipe(
      catchError(this.handleError<Request2[]>('getRequests', []))
    );
  }
  sendTempRequest(newRequest: any): Observable<any> {
    return this.http
    .post<any>('api/newRequest', newRequest, httpOptions)
    .pipe(
      catchError(this.handleError<any>('newRequest'))
    );
  }

  sendFullRequest(newRequest: Request, newRecoveries: Recovery[]) {
    const fullRequest = {
      requestData: newRequest,
      recoveries: newRecoveries,
    };
    return this.http
    .post<any>('api/newRequest', fullRequest, httpOptions)
    .pipe(
      catchError(this.handleError<any>('newRequest'))
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
