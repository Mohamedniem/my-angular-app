import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _DisplayService:DisplayService, private _CartService:CartService , private toastr: ToastrService){}

 
  dishomeproducts:any;
  isloading:boolean=false;

  ngOnInit():void{
    this.isloading=true
    this._DisplayService.displayhome().subscribe({
      next:(response)=>{this.dishomeproducts=response.data ,console.log(this.dishomeproducts);
        this.isloading=false
      },
      error:(err)=>{console.log(err)
        this.isloading=false
      }})
   }

   addproduct(id:string){
    this.isloading=true
    this._CartService.addcart(id).subscribe({
      next:(Response)=>{console.log(Response);
        this._CartService.cartItemNum.next(Response.numOfCartItems)
        this.toastr.success('It has been successfully add!', 'Add product');
        this.isloading=false
      },
      error:(err)=>{console.log(err)
        this.isloading=false
      }
    })
   }

   addwish(id:string){
    this.isloading=true
    this._CartService.addwishlist(id).subscribe({
      next:(res)=>{console.log(res)
        this.isloading=false
      },
      error:(err)=>{console.log(err)
        this.isloading=false
      }
      
    })
  }
}
