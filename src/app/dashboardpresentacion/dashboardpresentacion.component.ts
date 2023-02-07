import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-dashboardpresentacion',
  templateUrl: './dashboardpresentacion.component.html',
  styleUrls: ['./dashboardpresentacion.component.css']
})
export class DashboardpresentacionComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  imgperfil: string = '';
  tituloperfil: string = '';
  presentacion: string = '';

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(data => {
      console.log(data);

      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.imgperfil=data.imgperfil;
      this.tituloperfil=data.tituloperfil;
      this.presentacion=data.presentacion;
    });
  }

}
