import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  //Dependency Injection
  constructor(private productService: ProductService) { }



  ngOnInit(): void {
     this.productService.getProducts().subscribe((products) =>
    {
      this.productList = products;
    }
    );
  }

}
