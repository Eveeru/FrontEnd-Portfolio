import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'http://localhost:8080/progreso'

  constructor(private httpClient:HttpClient) { }
    
  //metodos del netbeans ver todos
public List(): Observable<Proyecto[]>{
  return this.httpClient.get<Proyecto[]>(this.url + '/lista');
}

//ver uno
public getById(id:number):Observable<Proyecto>{
  return this.httpClient.get<Proyecto>(this.url + `/ver/${id}`);
}

//crear
public crear(proyecto:Proyecto):Observable<any>{
  return this.httpClient.post<any>(this.url + '/crear', proyecto);
}

//eliminar
public eliminar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
}

//editar
public editar(proyecto:Proyecto):Observable<any>{
  return this.httpClient.put<any>(this.url + '/editar', proyecto);
}
}
