import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
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
  email = '';
  password = '';

  constructor(private formBuilder:FormBuilder, private authService: AutenticacionService, private ruta: Router) {
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }
  get Email(){
    return this.form.get("email");
  }

  get EmailInvalido(){
    return this.Email?.errors && this.Email?.touched;
  }

  get EmailValido(){
    return !this.Email?.errors && this.Email?.touched;
  }

   get Password(){
    return this.form.get("password");
  }

  get PasswordInvalido(){
    return this.Password?.errors && this.Password?.touched;
  }

  get PasswordValido(){
    return !this.Password?.errors && this.Password?.touched;
  }
  
  limpiar() {
    console.log("Se limpió el formulario")
    this.form.reset();
    this.ruta.navigate(['']);
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(JSON.stringify(this.form.value));
      this.authService.loginUser(this.form.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          alert("Puedes editar el portfolio");
          this.ruta.navigate(['/dashboard']);
        } else {
          alert("Error al iniciar sesión, credenciales no válidas!!!");
        }
      }, err => {
        alert("ERROR!!!");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error! No tienes acceso");
      this.ruta.navigate(['/']);
    }
  }

}
