import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  // Combinamos la funcion onShowDetail para emitir el id del producto que queremos detallar
  @Output() productDetail = new EventEmitter<number>();

  onShowDetail(){
    this.productDetail.emit(
      this.product.id
    )
  }
}
