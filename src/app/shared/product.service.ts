import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from '../model/product' 
import { productsUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    //return an observable
    return this.http.get<Product[]>(productsUrl);
  }
}
