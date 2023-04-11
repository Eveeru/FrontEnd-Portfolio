import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-dashboardexperiencia',
  templateUrl: './dashboardexperiencia.component.html',
  styleUrls: ['./dashboardexperiencia.component.css']
})
export class DashboardexperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private expeServ: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.expeServ.list().subscribe(data => {this.experiencias=data});
  }
}
