import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{ 
  @Input() product!: Product;
  @Output() addToCarkClick = new EventEmitter<Product>();

  onClick() : void {
    console.log(this.product);    
    this.addToCarkClick.emit(this.product)
  }

}
