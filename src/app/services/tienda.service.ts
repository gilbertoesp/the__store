import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import  { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(
    private http: HttpClient
  ) {   }

  getProductos(){
    return this.http.get<Product[]>(`https://api.escuelajs.co/api/v1/products`)
  }
}
