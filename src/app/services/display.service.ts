import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private _HttpClient:HttpClient) { }

  displayhome():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  displayspcproduct(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  displaycateo():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  displaybrands():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
}
