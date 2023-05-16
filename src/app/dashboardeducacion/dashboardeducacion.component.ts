import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-dashboardeducacion',
  templateUrl: './dashboardeducacion.component.html',
  styleUrls: ['./dashboardeducacion.component.css']
})
export class DashboardeducacionComponent implements OnInit {
  educaciones: Educacion[] = [];

  constructor(private eduService: EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

   //llamamos a los métodos
   public cargarEducacion():void{   //no va a haber ningun retorno, solo una carga de datos
    this.eduService.List().subscribe(db => {this.educaciones=db}); // uso el this porque esta fuera del método
  }

  public borrar(id:number){
    if(id != undefined){
      this.eduService.eliminar(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo elmiminar la educación")
        }
      )
    }
  }

}
