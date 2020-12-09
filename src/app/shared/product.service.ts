import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from '../model/product' 




const productApi = 'http://localhost:3000/products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    //return an observable
    return this.http.get<Product[]>(productApi);
  }
}
