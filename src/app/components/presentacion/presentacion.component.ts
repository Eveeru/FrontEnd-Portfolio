import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  personas: Persona[]=[]; //se llama al modelo que es un array

  constructor(
     //Inyectar el servicio para tomar acceso en la clase a los métodos
     private persoServ: PersonaService) { }

     //se debe cargar para que lo muestre al inicio
  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
  this.persoServ.list().subscribe(data => {this.personas=data});
}


} 
