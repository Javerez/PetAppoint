import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://127.0.0.1:5000';

@Injectable({providedIn: 'root'})
export class Servicios {
    constructor(private http: HttpClient) { }
}