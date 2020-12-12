import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/shared/cart.service';
import {MessengerService } from 'src/app/shared/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [];

totalPrice =0

  constructor(private msg:MessengerService,private cartService:CartService) { }

  ngOnInit(): void {    
   this.handleSubscription();
   this.loadCartItem();
  }

  handleSubscription() {

 // we have to use subscribe with observabale
 this.msg.getMsg().subscribe( (product:Product) =>{
  this.loadCartItem();
 });

  }

  loadCartItem(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>
    {
this.cartItems = items;
this.calculateCartTotal()
    })
  }

  calculateCartTotal(){
    this.totalPrice=0;
    this.cartItems.forEach(item => {
      this.totalPrice += (item.qty * item.price)
    })
  }

}
