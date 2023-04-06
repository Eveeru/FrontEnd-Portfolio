import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-dashboardpresentacion',
  templateUrl: './dashboardpresentacion.component.html',
  styleUrls: ['./dashboardpresentacion.component.css']
})
export class DashboardpresentacionComponent implements OnInit {
  personas: Persona[]=[]; //se llama al modelo que es un array

  constructor(private persoServ: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
  this.persoServ.list().subscribe(data => {this.personas=data});

  
  //void {
   // this..getDatos().subscribe(data => {
     // console.log(data);

      //this.nombre=data.nombre;
      //this.apellido=data.apellido;
     // this.imgperfil=data.imgperfil;
      //this.tituloperfil=data.tituloperfil;
      //this.presentacion=data.presentacion;});
  }

}
