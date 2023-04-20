import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from '../../servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias!: Experiencia[]; //se llama al modelo que es un array, crud con modales


  constructor(
     //Inyectar el servicio para tomar acceso en la clase a los métodos
     private expeServ: ExperienciaService) { }

     //se debe cargar para que lo muestre al inicio
  ngOnInit(): void {
    this.cargarExperiencia();
  }
     
    cargarExperiencia():void{
      this.expeServ.List().subscribe(data => {this.experiencias=data});
    }

  

}
