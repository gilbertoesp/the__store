import { Injectable } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';
import  { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

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
  getProductsWithParams(offset: number, limit: number){
    return this.http.get<Product[]>(`${this.api}`, {params: {offset, limit}})
  }

  getProduct(id: number){
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  create(body: CreateProductDTO){
    return this.http.post<Product>(this.api, body);
  }
  update(id: number, body: UpdateProductDTO){
    return this.http.put<Product>(`${this.api}/${id}`, body);
  }
  delete(id: number){
    return this.http.delete<boolean>(`${this.api}/${id}`)
  }
}
