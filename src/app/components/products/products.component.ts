import { Component } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private _DisplayService:DisplayService ,private _CartService:CartService, private toastr: ToastrService){}

 
  dishomeproducts:any;

  ngOnInit():void{
    this._DisplayService.displayhome().subscribe({
      next:(response)=>{this.dishomeproducts=response.data ,console.log(this.dishomeproducts);},
      error:(err)=>{console.log(err)}})
   }


   addproduct(id:string){
    
    this._CartService.addcart(id).subscribe({
      next:(Response)=>{console.log(Response);
        this._CartService.cartItemNum.next(Response.numOfCartItems)
        this.toastr.success('It has been successfully add!', 'Add product');
        
      },
      error:(err)=>{console.log(err)
        
      }
    })
   }

}
