import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) {
    this.getcart().subscribe({
    next:(res)=>{this.cartItemNum.next(res.numOfCartItems) }
      
    })
   }

  cartItemNum = new BehaviorSubject<number>(0)
 
  

  addcart(id:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:id})
  }

  addwishlist(id:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId:id})
  }

  getcart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
  }
  getwishlist():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }


  removeCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }
  
  removewishlistItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }


  updateCartItem(id:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count: count})
  }


  pay(id:string,shippingadress:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{shippingAddress:shippingadress})
  }
}
