import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() showProduct = new EventEmitter<number>();
  @Output() addedProduct = new EventEmitter<Product>();


  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
