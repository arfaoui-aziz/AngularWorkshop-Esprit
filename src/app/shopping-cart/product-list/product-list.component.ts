import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/product.service';
import { WishlistService } from 'src/app/shared/wishlist.service';
import { FiltersComponent } from '../filters/filters.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  wishlist: number[] = []
 


  searchInput:string ;
  //Dependency Injection
  constructor(private productService: ProductService , private wishlistService: WishlistService) { }



  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }

//   search(){

    
// if( this.searchInput == '' ){
//   this.ngOnInit();
// }else {
  
//   this.productList = this.productList.filter(res =>
//     {
//     return res.name.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())
//     })
// }
// }

    
  

}
