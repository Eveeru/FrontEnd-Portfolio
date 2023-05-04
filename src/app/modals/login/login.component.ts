import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
 persona : Persona = new Persona("","","","","");

  constructor(private formBuilder:FormBuilder, private authService: AutenticacionService, private ruta: Router) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      clave:['',[Validators.required,Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {
  }
  get Email(){
    return this.form.get('email');
  }

   get clave(){
    return this.form.get('clave');
  }
  
  limpiar() {
    console.log("Se limpió el formulario")
    this.form.reset();
    this.ruta.navigate(['']);
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid){
      //console.log(JSON.stringify(this.form.value));
      this.authService.loginPersona(JSON.stringify(this.form.value)).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data));
        window.location.reload(); //this.ruta.navigate(['/dashboard'])
      }, error => {
        alert("error al iniciar sesion")
      })
      //this.ruta.navigate([ ])
    } else {
      alert("hay un error en el formulario");
     
    }
  }

}
