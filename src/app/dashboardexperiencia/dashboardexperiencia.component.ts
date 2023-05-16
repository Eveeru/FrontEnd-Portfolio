import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardexperiencia',
  templateUrl: './dashboardexperiencia.component.html',
  styleUrls: ['./dashboardexperiencia.component.css']
})
export class DashboardexperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[];
  experiencia_form!: FormGroup;
  experiencia: any;
  id?: number;

  constructor(private expeServ: ExperienciaService, private fromBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) { 
    this.experiencia_form= this.fromBuilder.group ({
    });
  }




  ngOnInit(): void {
  }


}
