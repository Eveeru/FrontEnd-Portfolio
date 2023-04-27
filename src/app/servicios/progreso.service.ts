import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progreso } from '../models/progreso';

@Injectable({
  providedIn: 'root'
})
export class ProgresoService {
  url = 'http://localhost:8080/progreso';

  constructor(private httpClient:HttpClient) { }
   
  //metodos del netbeans ver todos
public List(): Observable<Progreso[]>{
  return this.httpClient.get<Progreso[]>(this.url + '/lista');
}

//ver uno
public getById(id:number):Observable<Progreso>{
  return this.httpClient.get<Progreso>(this.url + `/ver/${id}`);
}

//crear
public crear(progreso:Progreso):Observable<any>{
  return this.httpClient.post<any>(this.url + '/crear', progreso);
}

//eliminar
public eliminar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
}

//editar
public editar(progreso:Progreso):Observable<any>{
  return this.httpClient.put<any>(this.url + '/editar', progreso);
}


}
