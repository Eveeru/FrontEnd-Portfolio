import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://localhost:8080/persona/'
constructor(private httpClient: HttpClient) { }

public list(): Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.URL+ 'lista');
}
public getById(id:number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.URL+ `ver/${id}`);
}

public crear(persona:Persona):Observable<any>{
  return this.httpClient.post<any>(this.URL+ 'crear', persona);
}

public eliminar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL+ `borrar/${id}`);
}

public editar(persona:Persona):Observable<any>{
  return this.httpClient.put<any>(this.URL+ 'editar', persona);
}

}
