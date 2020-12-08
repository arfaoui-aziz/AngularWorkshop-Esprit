import { Injectable } from '@angular/core';
import { Product } from '../model/product' // Service deals with data
// component howa el vue  service howa el model 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products :Product[] = [
    new Product(1,'Product 1' ,'This is the First product description', 100),
    new Product(2,'Product 2' ,'This is the Second product description', 200),
    new Product(3,'Product 3' ,'This is the Third product description', 300),
    new Product(4,'Product 4' ,'This is the Fourth product description', 400),
    new Product(5,'Product 5' ,'This is the Fifth product description', 500),
    new Product(6,'Product 6' ,'This is the Sixth product description', 600),
  ]
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
