import { Product } from "../models/product";

export class ProductsService {

  private counter = 0;

  getProductsToBeOrdered(): Product[] {
    return [
      {id: 3, name : "TV", availability: true,
      arrivalDate: new Date(), category: "Elettrodomestici",
      price: 1800 , picture: "https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg"},
    ];
  }

  incrementCounter(): number {
    return ++this.counter;
  }

  getCounter(): number {
    return this.counter;
  }

  getProducts(): Product[] {
    const products: Product[] = [
      {id: 1, name : "Frigorifero", availability: true,
       arrivalDate: new Date(), category: "Elettrodomestici",
       price: 2000 , picture: "https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg"},
       {id: 2, name : "FRIGO Bar", availability: false,
       arrivalDate: new Date(), category: "Elettrodomestici",
       price: 700, picture: "https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg"}
    ];
    return products;
  }

}
