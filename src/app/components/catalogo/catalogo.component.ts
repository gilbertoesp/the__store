import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit{
  public productos: Product[] = [];
  public selectedProduct: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    images: [],
    creationAt: '',
    updatedAt: '',
    category: {
      id: 0,
      name: '',
      image: '',
      creationAt: '',
      updatedAt: ''
    }
  };
  
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
    this.toggleProductDetail();
    this.tiendaService.getProduct(id)
    .subscribe(data => {
      this.selectedProduct = data;
    })
  }
}
