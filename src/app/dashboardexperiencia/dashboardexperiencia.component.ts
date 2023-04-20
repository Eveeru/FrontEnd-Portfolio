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
      id: [''],
      trabajo:['', Validators.required],
      puesto:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      descripcion_exp:['', [Validators.required, Validators.minLength(6)]],
      periodo_exp:['', Validators.required],
      imagen_exp:['', Validators.required],
    });
  }

//campos y validaciones
get Trabajo(){
  return this.experiencia_form.get("trabajo");
  }
  get TrabajoValid() {
    return this.Trabajo?.touched && !this.Trabajo?.valid;
  }

  get Puesto(){
   return this.experiencia_form.get("puesto");
  }
  get PuestoValid() {
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  get Descripcion_exp(){
    return this.experiencia_form.get("descripcion");
   }
   get Descripcion_expValid() {
     return this.Descripcion_exp?.touched && !this.Descripcion_exp?.valid;
   }

  get Periodo_exp(){
   return this.experiencia_form.get("periodo");
  }
  get Periodo_expValid() {
    return this.Periodo_exp?.touched && !this.Periodo_exp?.valid;
  }

  get Imagen_exp(){
   return this.experiencia_form.get("imagen");
  }
  get Imagen_expValid() {
    return this.Imagen_exp?.touched && !this.Imagen_exp?.valid;
  }



  getExperiencias(): void{
    this.expeServ.List().subscribe({
      next: (data) => {
        this.experiencias=data;
        console.log("Experiencias en diseño cargadas correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }


  ngOnInit(): void {
    this.getExperiencias();
  }

  getById(id: number){
    this.expeServ.getById(id).subscribe({
      next: (data) => {
        this.experiencia_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Experiencia en diseño cargada correctamente");
  }

  crear() {
    let experiencia = this.experiencia_form.value;
    if (experiencia.id == '') {
      this.expeServ.crear(experiencia).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Experiencia en diseño guardada correctamente");
    } else {
      this.expeServ.editar(experiencia.id).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Experiencia en diseño modificada correctamente");
    }
  }

  eliminar(id: number) {
    if (confirm("Querés eliminar esta experiencia?")) {
      this.expeServ.eliminar(id).subscribe(data => {});
      window.location.reload();
      alert("Experiencia en diseño eliminada correctamente");
    }
  }
       
  reset() {
    console.log("Se limpió el formulario");
    this.experiencia_form.reset();
  }


  back(){
    this.ruta.navigate(['/persona']);
  }


}
