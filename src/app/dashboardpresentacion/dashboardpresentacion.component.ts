import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from '../models/persona';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-dashboardpresentacion',
  templateUrl: './dashboardpresentacion.component.html',
  styleUrls: ['./dashboardpresentacion.component.css']
})
export class DashboardpresentacionComponent implements OnInit {
  form: FormGroup;
  info: string = '';
  imagen: string = '';
  persona: Persona [] = []; //se llama al modelo que es un array

  constructor(private formBuilder: FormBuilder,private persoServ: PersonaService) { 
    this.form = this.formBuilder.group({
      id: [],
      info: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
  })
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
  this.persoServ.list().subscribe(data => {this.persona=data});

  
  
  }

}
