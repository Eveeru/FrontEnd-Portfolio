import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
  titulo: string = '';
  realizacion: string = '';
  Descripcion: string = '';

  constructor(
     //Inyectar el servicio para tomar acceso en la clase a los métodos
     private datosService: DatosService) { }

  ngOnInit(): void {
     //Esto es almacenar en lqa variable de instancia los datos recuperados por el Servicio
     this.datosService.getDatos().subscribe(data => {
      //console.log(data);
      //Definir info a mostrar
      this.titulo=data.titulo;
      this.realizacion=data.realizacion;
      this.Descripcion=data.Descripcion;

      
    });
  }

}
