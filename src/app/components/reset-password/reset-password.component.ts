import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){}


  resetpassword:FormGroup = new FormGroup({
    email:new FormControl (null,[Validators.required,Validators.email]),
    newPassword: new FormControl (null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]), 
  })


  handelresetpassword(reset:FormGroup){
    
    this._AuthService.resetpassword(reset.value).subscribe({
      next:(res)=>{console.log(res) ,
        this._Router.navigate(['/login'])},
      
      error:(err)=>{console.log(err)}
    
    });
    
    

  }

}
