import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shippingaddress',
  templateUrl: './shippingaddress.component.html',
  styleUrls: ['./shippingaddress.component.css']
})
export class ShippingaddressComponent {
  constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute) { }


  shippingaddressform:FormGroup=new FormGroup({
    details:new FormControl(null,Validators.required),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null,Validators.required)
  })

  redirectme(url:string){
    window.location.href=url
  }
  cardId:any;

  ngOnInit(){
    this._ActivatedRoute.paramMap.subscribe((params)=>{this.cardId=params.get("id")})
    
  }

  payonline(form:FormGroup){
    this._CartService.pay(this.cardId,form.value).subscribe({
      next:(response)=>{console.log(response);
        this.redirectme(response.session.url)
      },
      error:(error)=>{console.log(error);}
    });
  }

}
