import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Request } from './classes';

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
}
