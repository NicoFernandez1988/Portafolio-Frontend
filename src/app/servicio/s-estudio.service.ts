import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class SEstudioService {
  estURL = 'http://localhost:8080/estudios/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.estURL + 'lista');
  }

  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.estURL + `detail/${id}`);
  }

  public save(estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.estURL + 'create', estudio);

  }

  public pudate(id: number, estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.estURL + `update/${id}`, estudio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.estURL + `delete/${id}`);
  }

}
