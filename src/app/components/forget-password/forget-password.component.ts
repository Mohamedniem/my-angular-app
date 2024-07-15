import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

constructor(private _AuthService:AuthService , private _Router:Router){}
apimessage:string=''
forgetForm:FormGroup=new FormGroup({
  email:new FormControl(null , [Validators.email,Validators.required])
})

handelforget(forgetform:FormGroup){
  this._AuthService.forgetpassword(forgetform.value).subscribe({
    next:(res)=>{console.log(res)
      this.apimessage=res.message
      this._Router.navigate(['/verify-reset-password'])
    },
    error:(err)=>{console.log(err),this.apimessage=err.error.message}
  })

}

}
