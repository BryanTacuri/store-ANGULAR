import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';
 

@Component({
  selector: 'app-products',
  template: `<section class="products">
  <app-product (addToCarkClick)="addTooCard($event)" [product]="product" *ngFor="let product of products">
  </app-product>
</section>`,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productSvc: ProductsService, private shopppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts().
    pipe(
      tap((listadoProductos: Product[]) => this.products = listadoProductos)
    ).subscribe()
  }

  addTooCard(product:Product):void{
    console.log("ADD TO CARD", product);
    this.shopppingCartSvc.updateCart(product);
    
  }

}
