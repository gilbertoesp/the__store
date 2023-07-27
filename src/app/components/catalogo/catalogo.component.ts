import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent {
  public productos: Product[] = [];
  
  constructor(
    private tiendaService: TiendaService
  ){}
  
  ngOnInit(): void{
    this.tiendaService.getProductos()
      .subscribe(response => {
        this.productos = response;
      })
  }
}
