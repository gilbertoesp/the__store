import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UpdateProductDTO, CreateProductDTO, Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit{
  private myShoppingCart: Product[] = [];
  
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
  
  limit = 10;
  offset = 0;
  showProductDetail = false;
  
  constructor(
    private tiendaService: TiendaService,
    private storeService: StoreService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  
  ngOnInit(): void{
    // this.tiendaService.getProductos()
    //   .subscribe(response => {
    //     this.productos = response;
    //   }) 

    //  USANDO PAGINACION
    this.loadMore()
  }

  loadMore(){
    this.tiendaService.getProductsByPage(this.limit,this.offset)
      .subscribe(data => {
        this.productos = this.productos.concat(data);
        this.offset += this.limit;
      })
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
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
    this.tiendaService.create(product)
      .subscribe(
        (response) => {
          console.log('POST request successful!', response);
          // Handle the response from the server
        }
      );
  }

  updateProduct(){
    const cambios: UpdateProductDTO = {
      title: 'A new title'
    }
    const id = this.selectedProduct.id;
    this.tiendaService.update(id , cambios)
      .subscribe(data => {
        const productIndex = this.productos.findIndex(item => item.id === id);
        this.productos[productIndex] = data;
        this.selectedProduct = data;
      });
  }

  deleteProduct(){
    const id = this.selectedProduct.id;
    this.tiendaService.delete(id)
      .subscribe(() => {
        const productIndex = this.productos.findIndex(item => item.id === id);
        this.productos.splice(productIndex, 1);
        this.showProductDetail = false;
      })
  }
}
