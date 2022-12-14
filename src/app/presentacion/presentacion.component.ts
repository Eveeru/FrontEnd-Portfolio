import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  
  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
  
  nombre: string = '';
  apellido: string = '';
  imgperfil: string = '';
  tituloperfil: string = '';
  presentacion: string = '';

  constructor(
    //Inyectar el servicio para tomar acceso en la clase a los métodos
    private datosService: DatosService) { }

  ngOnInit(): void {
    //Esto es almacenar en lqa variable de instancia los datos recuperados por el Servicio
    this.datosService.getDatos().subscribe(data => {
      console.log(data);
      //Definir info a mostrar
      
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.imgperfil=data.imgperfil;
      this.tituloperfil=data.tituloperfil;
      this.presentacion=data.presentacion;
    });
  }

}
