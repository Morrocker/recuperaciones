import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private http: HttpClient,
  ) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  getUsers(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`api/users/${userId}`)
    .pipe(
      catchError(this.handleError<string[]>('getRecoveries', []))
    );
  }
  getMachines(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`api/machines/${userId}`)
    .pipe(
      catchError(this.handleError<string[]>('getRecoveries', []))
    );
  }
  getDisks(machineId: number): Observable<string[]> {
    return this.http.get<string[]>(`api/disk/${machineId}`)
    .pipe(
      catchError(this.handleError<string[]>('getRecoveries', []))
    );
  }
}
