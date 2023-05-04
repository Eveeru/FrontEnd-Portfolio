import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  persona: Persona[]=[]; //se llama al modelo que es un array

  constructor(
     //Inyectar el servicio para tomar acceso en la clase a los métodos
     private persoServ: PersonaService) { }

     //se debe cargar para que lo muestre al inicio
  ngOnInit(): void {
    this.cargarPersona();
  }

  public cargarPersona():void{
    this.persoServ.list().subscribe(data => {this.persona=data});
}
public borrar(id:number){
  if(id != undefined){
    this.persoServ.borrar(id).subscribe(
      data =>{
        this.cargarPersona();
      }, err =>{
        alert("No se pudo elmiminar los datos personales")
      }
    )
  }
}


} 
