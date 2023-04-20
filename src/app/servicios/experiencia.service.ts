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

  //metodos del netbeans ver todos
public List(): Observable<Experiencia[]>{
  return this.httpClient.get<Experiencia[]>(this.url + 'lista');
}

//ver uno
public getById(id:number):Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
}

//crear
public crear(experiencia:Experiencia):Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', experiencia);
}

//eliminar
public eliminar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}

//editar
public editar(experiencia:Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.url + 'editar', experiencia);
}


}
