import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario_service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin!: FormGroup;
  error_id:any;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService:UsuarioService) { }

  ngOnInit() {
    let formulario = {
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])]
    }
    this.formLogin = this.formBuilder.group(formulario);
  }
  login(){
    if (this.formLogin.status === 'VALID') {
      this.usuarioService.inicioSesionUsuario(this.formLogin.value).subscribe(data => {
          console.log(data.id)
          switch(data.id){
              case 1:
                this.error_id=data.id;
                break;
              case 2:
                this.error_id=data.id;
                break;
              case 3:
                localStorage.setItem('token',data.token);
                localStorage.setItem('userData',JSON.stringify(data.resultados[0]));
                this.router.navigate(['menu']);
                break;
          }
          
      });
      
    }
  }
}
