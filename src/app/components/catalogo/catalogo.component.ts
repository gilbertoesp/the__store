import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit{
  public productos: Product[] = [];
  showProductDetail = false;
  constructor(
    private tiendaService: TiendaService
  ){}
  
  ngOnInit(): void{
    this.tiendaService.getProductos()
      .subscribe(response => {
        this.productos = response;
      })
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.tiendaService.getProduct(id)
    .subscribe(data => {
      console.log('product', data);
    })
  }
}
