import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = 'http://localhost:8080/persona/login';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("Está corriendo el servicio de autenticación");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }
   loginUser(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(db => {
      sessionStorage.setItem('currentUser', JSON.stringify(db));
      this.currentUserSubject.next(db);
      console.log("Servicio esta corriendo" + JSON.stringify(db));
      return db;
    }));
  }
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
