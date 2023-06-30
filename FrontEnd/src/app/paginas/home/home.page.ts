import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario_service/usuario.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }
}
