import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){}


  login:FormGroup = new FormGroup({
    email:new FormControl (null,[Validators.required,Validators.email]),
    password: new FormControl (null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]), 
  })
  

  handellogin(logForm:FormGroup){
    this._AuthService.login(logForm.value).subscribe({
      next:(response)=>{this._Router.navigate(['/home']),
        localStorage.setItem("token",response.token)
        this._AuthService.isloggedin.next(true)
      },
      error:(err)=>{console.log(err)}
      
    })
  }


}
