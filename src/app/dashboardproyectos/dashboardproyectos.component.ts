import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-dashboardproyectos',
  templateUrl: './dashboardproyectos.component.html',
  styleUrls: ['./dashboardproyectos.component.css']
})
export class DashboardproyectosComponent implements OnInit {
  titulo: string = '';
  realizacion: string = '';
  Descripcion: string = '';

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(data => {
      this.titulo=data.titulo;
      this.realizacion=data.realizacion;
      this.Descripcion=data.Descripcion;
    });
  }
  }
