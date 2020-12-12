import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { cartUrl } from 'src/environments/environment';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{
return this.http.get<CartItem[]>(cartUrl).pipe(
//map iterate through each cart item  so we can modifie the item 
  map((result: any[]) => {
    let cartItems: CartItem[] = [];
  
    for(let item of result){
      let productExists = false;

      for(let i in cartItems){
        if (cartItems[i].productId === item.product.id){
          cartItems[i].qty++ ;
          productExists = true;
          break;
          }
        }
    
        if(!productExists) {
          cartItems.push(new CartItem(item.id, item.product))
        }

    }   


  return cartItems;
  })

);
  } 

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl,{ product });
}

deleteCartItem(cartItem: CartItem): Observable<CartItem>{
  const id = typeof cartItem === 'number' ? cartItem : cartItem.id;
  return this.http.delete<CartItem>(cartUrl+'/'+id)


}

}
