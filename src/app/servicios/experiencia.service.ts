import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
url= 'http://localhost:8080/experiencia/'
  constructor(private httpClient:HttpClient) { }

public list(): Observable<Experiencia[]>{
  return this.httpClient.get<Experiencia[]>(this.url + 'lista');
}

public getById(id:number):Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
}

public crear(experiencia:Experiencia):Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', experiencia);
}

public eliminar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}

public editar(experiencia:Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.url + 'editar', experiencia);
}


}
