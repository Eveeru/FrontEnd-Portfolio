import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { Progreso } from 'src/app/models/progreso';
import { ProgresoService } from 'src/app/servicios/progreso.service';

@Component({
  selector: 'app-dashboardhabilidades',
  templateUrl: './dashboardhabilidades.component.html',
  styleUrls: ['./dashboardhabilidades.component.css']
})
export class DashboardhabilidadesComponent implements OnInit {
  //progresos: any;
  progresos: Progreso[] = [];

  constructor(private progService: ProgresoService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

   //llamamos a los métodos
   public cargarHabilidad():void{   //no va a haber ningun retorno, solo una carga de datos
    this.progService.List().subscribe(data => {this.progresos=data}); // uso el this porque esta fuera del método
  }
  public borrar(id:number){
    if(id != undefined){
      this.progService.eliminar(id).subscribe(
        data =>{
          this.cargarHabilidad();
        }, err =>{
          alert("No se pudo elmiminar la educación")
        }
      )
    }
  }

}
