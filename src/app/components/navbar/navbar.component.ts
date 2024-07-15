import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _AuthService:AuthService ,private _CartService:CartService){}

  numberodcartitems=0
  isloggeduser:boolean=false;

  logOut(){
    this._AuthService.logout();
  }

  ngOnInit(){
    this._AuthService.isloggedin.subscribe((x)=>{this.isloggeduser=x}),
    this._CartService.cartItemNum.subscribe({
      next:(nums)=>{this.numberodcartitems =  nums}
    })

  }

}
