import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recovery, NewRecovery } from './classes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})

export class RecoveriesService {

  private recoveriesUrl = 'api/recoveries';
  private newrecoveriesUrl = 'api/newrecoveries';

  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  getRecoveries(): Observable<Recovery[]> {
    return this.http.get<Recovery[]>(this.recoveriesUrl)
    .pipe(
      catchError(this.handleError<Recovery[]>('getRecoveries', []))
    );
  }

  getRecoveriesByRequest(recId: number): Observable<Recovery[]> {
    return this.http.get<Recovery[]>(`api/recoveries2/?recId=${recId}`)
    .pipe(
      catchError(this.handleError<Recovery[]>('getRequests', []))
    );
  }

  addNewRecovery(newRecovery: NewRecovery) {
    return this.http
      .post<NewRecovery>(this.newrecoveriesUrl, newRecovery, httpOptions)
      .pipe(
      catchError(this.handleError<NewRecovery>('addRecovery'))
    );
  }

  addNewRecoveries(recoveries: NewRecovery[], requestId: number) {
    return this.http
      .post(`api/newrecoveries/${ requestId }`, recoveries, httpOptions)
      .pipe(
      catchError(this.handleError('addRecovery'))
    );
  }


  cancelRecovery(id: number) {
    return this.http
      .post<NewRecovery>('api/cancelRecovery', id, httpOptions)
      .pipe(
      catchError(this.handleError<NewRecovery>('addRecovery'))
    );
  }
}
