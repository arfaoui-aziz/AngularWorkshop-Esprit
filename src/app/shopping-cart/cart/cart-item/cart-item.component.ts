import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

 @Input() cartItem: CartItem ;
 @Output() cartItemDeleted = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  deleteProductFromCart(cartItem: CartItem){
    this.cartItemDeleted.emit();
    this.cartService.deleteCartItem(cartItem).subscribe((result)=>
    {
      console.log(result);
    });  
    
  }

}
