import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessengerService } from 'src/app/shared/messenger.service';
import { CartService } from 'src/app/shared/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product 
  constructor(private msg: MessengerService , private cartService:CartService ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    // add Product to Cart + send message to Cart Component once product  Added
    this.cartService.addProductToCart(this.productItem).subscribe(()=>
    {
      this.msg.sendMsg(this.productItem)
    })
    
  }

}
