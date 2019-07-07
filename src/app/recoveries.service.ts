import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recovery } from './classes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})

export class RecoveriesService {

  private recoveriesUrl = 'api/recoveries';

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

}
