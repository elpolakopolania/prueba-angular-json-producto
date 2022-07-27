import { Injectable } from '@angular/core';
import { Producto } from '../modelos/Producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURl = 'assets/data.json';

  constructor(private http: HttpClient) { 
  }

  get(): Observable<Producto>{
    return this.http.get<any>(this.baseURl);
  }
}
