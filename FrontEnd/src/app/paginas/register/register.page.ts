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
    this.formRegister = this.formBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
  mostrar(){
    console.log(this.formRegister.value)
  }
  register(){
    if (this.formRegister.status === 'VALID') {
      this.usuarioService.registroUsuario(this.formRegister.value).subscribe(data => {
        this.error_id=data.id;
        console.log("id: "+data.id);
        if (this.error_id==1) this.router.navigate(['login']);
        
      });
  }
  }
}
