import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  @Input() productsList: Product[] = [];
  @Output() emitter: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() emitterDetails: EventEmitter<Product> = new EventEmitter<Product>();

  cancelProduct(selectedProduct: Product){
    console.log("Product cancelled" + selectedProduct.id);
    this.emitter.emit(selectedProduct);
  }

  showDetails(product: Product){
    this.emitterDetails.emit(product);  
  }
}
