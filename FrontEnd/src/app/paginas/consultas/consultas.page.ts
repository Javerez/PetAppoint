import { Component, OnInit } from '@angular/core';
import { format, parseISO, toDate } from 'date-fns';
import { ConsultasService } from 'src/app/servicios/consultas_service/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  presentingElement: any = null;
  showStart = false;
  showEnd = false;
  aux:any;
  datos:Array<any>=[];

  nuevaConsulta: any = {
    title: '',
    nombre:'',
    fecha:null,
  }
  constructor(private consultaService:ConsultasService,private router:Router) { }

  ngOnInit(): void {
    this.consultaService.getConsultas().subscribe(data=>{
        console.log(data);
        for(let i=0;i<data.length;i++){
          this.datos.push(data[i]);
        }
    });
  }
  agregarConsulta(){
    this.aux = this.nuevaConsulta.fecha.toISOString();
    this.nuevaConsulta.fecha = 
    console.log(this.nuevaConsulta)
  }
  eliminarConsulta(idConsulta:any){
    this.consultaService.eliminarConsulta(idConsulta).subscribe(data =>{
      if(data.id==1){
        
        this.router.navigate(['consultas'])
      }
    });
  }
}
