import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Richiesta } from '../richiesta';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root',
})
export class ConnessioneService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080';

  public getRichieste(): Observable<Richiesta[]> {
    return this.http.get<any>(`${this.baseUrl}/richiesta`);
  }

  public putRichiesta(
    richiesta: Richiesta,
    id: number
  ): Observable<Richiesta[]> {
    console.log(JSON.stringify(richiesta) + 'sto per inviare');
    return this.http.put<any>(`${this.baseUrl}/richiesta/${id}`, richiesta);
  }

  public deleteRichiesta(id: number): Observable<void> {
    console.log(id + "id arrivato?")
    return this.http.delete<void>(`${this.baseUrl}/richiesta/${id}`);
  }
}
