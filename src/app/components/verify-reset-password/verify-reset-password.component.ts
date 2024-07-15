import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.css']
})
export class VerifyResetPasswordComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  apimessage:string=''
resCode:FormGroup=new FormGroup({
  resetCode:new FormControl(null , [Validators.required])
})

handelforget(form:FormGroup){
  this._AuthService.resetcode(form.value).subscribe({
    next:(res)=>{console.log(res)
      this.apimessage=res.message
      this._Router.navigate(['/reset-password'])
    },
    error:(err)=>{console.log(err)
      this.apimessage=err.error.message
    }
  })

}

}
