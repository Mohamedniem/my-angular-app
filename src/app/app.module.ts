import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CateogriesComponent } from './components/cateogries/cateogries.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CateogriessliderComponent } from './components/cateogriesslider/cateogriesslider.component';
import { MainsliderComponent } from './components/mainslider/mainslider.component';
import { ShippingaddressComponent } from './components/shippingaddress/shippingaddress.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyResetPasswordComponent } from './components/verify-reset-password/verify-reset-password.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthinterceptorInterceptor } from './Interceptors/authinterceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    BrandsComponent,
    WishlistComponent,
    ProductsComponent,
    ProductdetailsComponent,
    CateogriesComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    CateogriessliderComponent,
    MainsliderComponent,
    ShippingaddressComponent,
    SpinnerComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerifyResetPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule ,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
