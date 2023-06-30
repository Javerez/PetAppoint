import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Servicios } from 'src/app/servicios/services';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister!: FormGroup;

  constructor(private formBuilder: FormBuilder, services: Servicios) { 
    this.formRegister = this.formBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'clave': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
  mostrar(){
    console.log(this.formRegister.value)
  }
}
