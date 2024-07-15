import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) { }

  isloggedin=new BehaviorSubject<boolean>(localStorage.getItem('token')?true:false);

  register(reg:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',reg)
  }

  login(log:object):Observable<any>
{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',log)
}

logout(){
  localStorage.removeItem("token")
  this._Router.navigate(['/login'])
  this.isloggedin.next(false)

}

forgetpassword(forpass:any):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',forpass)}

resetcode(form:any):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',form)}

  resetpassword(form:any):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',form)
  }

}
