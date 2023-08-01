import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Product[] | undefined = undefined;
  productsToBeOrdered: Product[] | undefined = undefined;

  constructor(public service: ProductsService, private router: Router) {

    this.service.getProductsAsObservable().subscribe(
      (prodotti: Product[]) => this.products = prodotti);

    this.service.getProductsToBeOrderedAsObservable().subscribe(
      (prodotti: Product[]) => this.productsToBeOrdered = prodotti );


     //this.products = this.service.getProducts();
     // this.productsToBeOrdered = this.service.getProductsToBeOrdered();
   }

  cancelProduct(selectedProduct: Product): void {

    const index = this.products?.indexOf(selectedProduct);
    this.products?.splice(index!, 1);
  }

  showDetails(product: Product): void {
   // this.selectedProduct = product;
   this.router.navigate(["products", product.id]);
  }

  goBack(message: string): void {
    console.log("Message received: " + message);
  }

  increment(): void {
    this.service.incrementCounter();
  }

}
