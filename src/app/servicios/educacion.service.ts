import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url= 'https://portfolio-backend-3u33.onrender.com/educacion'

  constructor(private httpClient:HttpClient) { }

    //metodos del netbeans ver todos
public List(): Observable<Educacion[]>{
  return this.httpClient.get<Educacion[]>(this.url + '/lista');
}

//ver uno
public getById(id:number):Observable<Educacion>{
  return this.httpClient.get<Educacion>(this.url + `/ver/${id}`);
}

//crear
public crear(educacion:Educacion):Observable<any>{
  return this.httpClient.post<any>(this.url + '/crear', educacion);
}

//eliminar
public eliminar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
}

//editar
public editar(educacion:Educacion):Observable<any>{
  return this.httpClient.put<any>(this.url + '/editar', educacion);
}
}
