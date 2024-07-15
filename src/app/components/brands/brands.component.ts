import { Component } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  constructor(private _DisplayService:DisplayService){}
  disbrands:any;

  ngOnInit():void{
    this._DisplayService.displaybrands().subscribe({
      next:(response)=>{this.disbrands=response.data ,console.log(this.disbrands);},
      error:(err)=>{console.log(err)}})
   }

}
