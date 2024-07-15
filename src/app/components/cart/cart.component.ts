import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private _CartService:CartService){}
  cartItems:any[]=[];

  cartproducts:any;
  removeditem:any;

  ngOnInit(){
    this._CartService.getcart().subscribe({
      next:(response)=>{console.log(response.data),this.cartproducts=response.data},
      error:(err)=>{console.log(err)}
    })
  }

  removeItem(id:string){
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{this.cartproducts = response.data
        this._CartService.cartItemNum.next(response.numOfCartItems)
      },
      error:(err)=>{console.log(err);}
    })
  }
  editItem(id:string,count:number){
    this._CartService.updateCartItem(id,count).subscribe({
      next:(response)=>{this.cartproducts = response.data},
      error:(err)=>{console.log(err);}
    })
  }

}
