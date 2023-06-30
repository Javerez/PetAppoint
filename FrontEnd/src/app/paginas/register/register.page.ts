import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario_service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister!: FormGroup;
  error_id:any;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private usuarioService:UsuarioService
    ) { 
  }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéñóúüÁÉÑÓÚÜ -]*$/)
      ])),
      apellido: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéñóúüÁÉÑÓÚÜ -]*$/)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        //Validators.pattern( /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])),
    });
  }
  mostrar(){
    console.log(this.formRegister.value)
  }
  register(){
    if (this.formRegister.status === 'VALID') {
      this.usuarioService.registroUsuario(this.formRegister.value).subscribe(data => {
        this.error_id=data.id;
        console.log("id: "+data.id);
        if (this.error_id==1) this.router.navigate(['home']);
        
      });
  }
  }
}
