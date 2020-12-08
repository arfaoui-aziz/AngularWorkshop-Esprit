import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import {MessengerService } from 'src/app/shared/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [
 // {id:1,productId:1,productName: 'Test1' ,qty: 4 ,price:200},
//  {id:2,productId:2, productName:'Test2',qty: 2 ,price:100},
//  {id:3,productId:3,productName: 'Test3' ,qty: 4 ,price:100},
];

totalPrice =0

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    // we have to use subscribe with observabale
    this.msg.getMsg().subscribe( (product:Product) =>{
     this.addProductToCart(product);
    });
    
  }

  addProductToCart(product : Product){
    
  let productExists = false;

  for(let i in this.cartItems){
    if (this.cartItems[i].productId === product.id){
      this.cartItems[i].qty++ ;
      productExists = true;
      break;
      }
    }

    if(!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty:1,
        price: product.price
      })
    }

    this.totalPrice=0;
    this.cartItems.forEach(item => {
      this.totalPrice += (item.qty * item.price)
    })

  }

}
