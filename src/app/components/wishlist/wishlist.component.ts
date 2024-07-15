import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor(private _CartService:CartService){}

  wishlist:any;

  addTocartfromWish(id:string){
    this._CartService.addcart(id).subscribe({
      next:(res)=>{console.log(res)
        this._CartService.cartItemNum.next(res.numOfCartItems)
        this.removeitem(id)
      },
      error:(err)=>{console.log(err);
      }
      
    });
  }

  ngOnInit(){
    this.getwishlist()
 
  }


  getwishlist(){
    this._CartService.getwishlist().subscribe({
      next:(res)=>{this.wishlist=res.data}, 
      error:(err)=>{console.log(err)}
      
    })
  }
  
  removeitem(id:string){
    this._CartService.removewishlistItem(id).subscribe({
      next:(response)=>{console.log(response);
      
        this.getwishlist()
      },
      error:(err)=>{console.log(err)}

    })

}
}
