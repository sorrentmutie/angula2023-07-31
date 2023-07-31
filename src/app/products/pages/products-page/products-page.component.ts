import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Product[] | undefined = undefined;
  productsToBeOrdered: Product[] | undefined = undefined;
  selectedProduct: Product | undefined = undefined;
  service: ProductsService = new ProductsService();

  constructor() {
     this.products = this.service.getProducts();
     this.productsToBeOrdered = this.service.getProductsToBeOrdered();
   }

  cancelProduct(selectedProduct: Product): void {

    const index = this.products?.indexOf(selectedProduct);
    this.products?.splice(index!, 1);
  }

  showDetails(product: Product): void {
    this.selectedProduct = product;
  }

  goBack(message: string): void {
    console.log("Message received: " + message);
    this.selectedProduct = undefined;
  }

  increment(): void {
    this.service.incrementCounter();
  }

}
