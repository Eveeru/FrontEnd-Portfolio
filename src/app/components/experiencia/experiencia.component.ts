import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { DatosService } from 'src/app/servicios/datos.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[]; //se llama al modelo que es un array, crud con modales


  constructor(
     //Inyectar el servicio para tomar acceso en la clase a los métodos
     private expeServ: ExperienciaService) { }

     //se debe cargar para que lo muestre al inicio
  ngOnInit(): void {
    this.cargarExperiencia();
  }
     
  //llamar a los metodos
    public cargarExperiencia():void{ //sin retorno, solo carga datos
      this.expeServ.List().subscribe(data => {this.experiencias=data});
    }

    public borrar(id:number){
      if(id != undefined){
        this.expeServ.eliminar(id).subscribe(
          data =>{
            // alert("Experiencia eliminada correctamente)
            this.cargarExperiencia();
          }, err =>{
            alert("No se pudo elmiminar la experiencia")
          }
        )
      }
    }
  

}
