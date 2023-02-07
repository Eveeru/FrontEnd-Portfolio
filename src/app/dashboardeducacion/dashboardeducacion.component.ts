import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-dashboardeducacion',
  templateUrl: './dashboardeducacion.component.html',
  styleUrls: ['./dashboardeducacion.component.css']
})
export class DashboardeducacionComponent implements OnInit {
  educaciones: any = [];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(data => {
      this.educaciones=data.educaciones;
    });
  }

}
