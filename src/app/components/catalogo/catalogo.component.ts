import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateProductDTO, Product } from 'src/app/models/product.model';
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

  createNewProduct() {
    const product: CreateProductDTO = {
      "categoryId": 2,
      "images": ['https://picsum.photos/300', 'https://picsum.photos/300', 'https://picsum.photos/300'],
      "title": 'A new product',
      "price": 1.0,
      "description": 'A description that describes',
    }
    this.tiendaService.createProduct(product)
      .subscribe(
        (response) => {
          console.log('POST request successful!', response);
          // Handle the response from the server
        }
      );
  }
}
