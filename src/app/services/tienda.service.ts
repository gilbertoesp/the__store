import { Injectable } from '@angular/core';
import { Product, CreateProductDTO } from '../models/product.model';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TiendaService {
  private api = `https://api.escuelajs.co/api/v1/products`
  constructor(
    private http: HttpClient
  ) {   }

  getProductos(){
    return this.http.get<Product[]>(`${this.api}`);
  }

  getProduct(id: number){
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  createProduct(body: CreateProductDTO){
    return this.http.post<Product>(this.api, body);
  }
}
