import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {

  constructor(private _DisplayService:DisplayService , private _ActivatedRoute:ActivatedRoute ,private _CartService:CartService){}


  productid:any;
  specificproducts:any;

  ngOnInit(id:string){
    this._ActivatedRoute.paramMap.subscribe((param)=>{this.productid=param.get("id")})

    this._DisplayService.displayspcproduct(this.productid).subscribe({
      next:(reponse)=>{console.log(reponse);this.specificproducts=reponse.data},
      error:(err)=>{console.log(err)}
      
    })
  }

  addproduct(id:string){
    
    this._CartService.addcart(id).subscribe({
      next:(Response)=>{console.log(Response);
        
      },
      error:(err)=>{console.log(err)
        
      }
    })
   }


   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
