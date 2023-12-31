import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  counter = 0;
  showMenu = false;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void{
    this.storeService.myCart$.subscribe(
      products => { this.counter = products.length}
    )
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
