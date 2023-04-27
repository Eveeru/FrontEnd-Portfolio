import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';
 import { HttpClient } from '@angular/common/http';
import { Proyecto } from 'src/app/models/proyecto';
 import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
  proyectos: Proyecto[]=[];

  constructor(private proyService: ProyectoService) { }

  ngOnInit(): void {
     this.cargarProyecto();
  }

  //llamar a los metodos
    public cargarProyecto():void{ //sin retorno, solo carga datos
      this.proyService.List().subscribe(data => {this.proyectos=data});
    }

    public borrar(id:number){
      if(id != undefined){
        this.proyService.eliminar(id).subscribe(
          data =>{
            // alert("Experiencia eliminada correctamente)
            this.cargarProyecto();
          }, err =>{
            alert("No se pudo elmiminar la experiencia")
          }
        )
      }
    }

}
