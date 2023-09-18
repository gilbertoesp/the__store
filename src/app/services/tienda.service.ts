import { Injectable } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';
import  { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.api}`,{ params: {limit,offset}})
  }

  getProduct(id: number){
    return this.http.get<Product>(`${this.api}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Conflict) {
            return throwError('Algo esta en conflicto en el server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('El producto no existe');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('No estas permitido');
          }
          return throwError('Ups algo salio mal');
        })
      );
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
