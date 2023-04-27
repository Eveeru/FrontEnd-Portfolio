import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
  
  educaciones: Educacion[]=[];

  constructor(private eduService: EducacionService) { }

      //se debe cargar para que lo muestre al inicio
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
