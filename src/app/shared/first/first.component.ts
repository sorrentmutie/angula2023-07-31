import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products-service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  service: ProductsService = new ProductsService();

  increment(): void {
    this.service.incrementCounter();
  }
}
