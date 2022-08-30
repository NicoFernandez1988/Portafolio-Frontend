import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadBlanda } from '../model/habilidad-blanda';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadBlandaService {
  habBURL = 'http://localhost:8080/habilidadB/'
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HabilidadBlanda[]>{
    return this.httpClient.get<HabilidadBlanda[]>(this.habBURL + 'lista');
  }

  public detail(id: number): Observable<HabilidadBlanda>{
    return this.httpClient.get<HabilidadBlanda>(this.habBURL + `detail/${id}`);
  }

  public save(habilidadBlanda: HabilidadBlanda): Observable<any>{
    return this.httpClient.post<any>(this.habBURL + 'create', habilidadBlanda);

  }

  public pudate(id: number, habilidadBlanda: HabilidadBlanda): Observable<any>{
    return this.httpClient.put<any>(this.habBURL + `update/${id}`, habilidadBlanda);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habBURL + `delete/${id}`);
  }
}
