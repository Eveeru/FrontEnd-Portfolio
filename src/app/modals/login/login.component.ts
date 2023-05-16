import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
 

  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
    })
   }

  ngOnInit(): void {
  }
  
    }
 
