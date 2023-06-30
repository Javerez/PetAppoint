import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) {
      
  }
  public getConsultas():Observable<any>{
     return this.http.get(URL + '/consultas');
  }
  public eliminarConsulta(data:any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        idConsulta: data
      },
    };
    return this.http.delete(URL + '/eliminarconsulta',options);
  }
}
