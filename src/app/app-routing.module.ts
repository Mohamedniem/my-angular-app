import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductsComponent } from './components/products/products.component';
import { CateogriesComponent } from './components/cateogries/cateogries.component';
import { BrandsComponent } from './components/brands/brands.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShippingaddressComponent } from './components/shippingaddress/shippingaddress.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyResetPasswordComponent } from './components/verify-reset-password/verify-reset-password.component';
import { authGuard } from './guards/auth.guard';
import { noauthGuard } from './guards/noauth.guard';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard] ,component:HomeComponent},
  {path:"cart",canActivate:[authGuard] ,component:CartComponent},
  {path:"wishlist",canActivate:[authGuard] ,component:WishlistComponent},
  {path:"products",canActivate:[authGuard] ,component:ProductsComponent},
  {path:"productdetails/:id",canActivate:[authGuard],component:ProductdetailsComponent},
  {path:"cateogries",canActivate:[authGuard] ,component:CateogriesComponent},
  {path:"brands",canActivate:[authGuard] ,component:BrandsComponent},
  {path:"register",canActivate:[noauthGuard] ,component:RegisterComponent},
  {path:"login",canActivate:[noauthGuard] ,component:LoginComponent},
  {path:"forget-password",canActivate:[noauthGuard] ,component:ForgetPasswordComponent},
  {path:"reset-password",canActivate:[noauthGuard] ,component:ResetPasswordComponent},
  {path:"verify-reset-password",canActivate:[noauthGuard] ,component:VerifyResetPasswordComponent},
  {path:"brands",canActivate:[authGuard] ,component:BrandsComponent},
  {path:"shippingaddress/:id",canActivate:[authGuard] ,component:ShippingaddressComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
