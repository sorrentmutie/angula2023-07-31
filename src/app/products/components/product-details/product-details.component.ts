import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy {
   product: Product | undefined = undefined;
   subscription: Subscription | undefined = undefined;

   constructor(private router: Router, private route: ActivatedRoute, private service: ProductsService) {
      const id =   this.route.snapshot.paramMap.get("id");
      if(id) {
         this.subscription =  this.service.getProductById(+id).subscribe( x => this.product = x);
      }
   }
  ngOnDestroy(): void {
    console.log("ProductDetailsComponent destroyed");
    this.subscription?.unsubscribe();
  }


  goBack(): void {
      this.router.navigate(["products"]);
  }
}
