import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';


@Component({
  selector: 'app-dashboardproyectos',
  templateUrl: './dashboardproyectos.component.html',
  styleUrls: ['./dashboardproyectos.component.css']
})
export class DashboardproyectosComponent implements OnInit {
  titulo: string = '';
  realizacion: string = '';
  Descripcion: string = '';
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
