import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadDura } from '../model/habilidad-dura';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadDuraService {
  habDURL = 'http://localhost:8080/habilidadD/'
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HabilidadDura[]>{
    return this.httpClient.get<HabilidadDura[]>(this.habDURL + 'lista');
  }

  public detail(id: number): Observable<HabilidadDura>{
    return this.httpClient.get<HabilidadDura>(this.habDURL + `detail/${id}`);
  }

  public save(habilidadDura: HabilidadDura): Observable<any>{
    return this.httpClient.post<any>(this.habDURL + 'create', habilidadDura);

  }

  public pudate(id: number, habilidadDura: HabilidadDura): Observable<any>{
    return this.httpClient.put<any>(this.habDURL + `update/${id}`, habilidadDura);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habDURL + `delete/${id}`);
  }
}
