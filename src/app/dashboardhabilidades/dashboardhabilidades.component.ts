import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-dashboardhabilidades',
  templateUrl: './dashboardhabilidades.component.html',
  styleUrls: ['./dashboardhabilidades.component.css']
})
export class DashboardhabilidadesComponent implements OnInit {
  progresos: any;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(data => {
      this.progresos=data.progresos;
    });
  }

}
