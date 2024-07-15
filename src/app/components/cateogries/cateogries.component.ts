import { Component } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-cateogries',
  templateUrl: './cateogries.component.html',
  styleUrls: ['./cateogries.component.css']
})
export class CateogriesComponent {

  constructor(private _DisplayService:DisplayService){}
  categories:any[]=[];

  ngOnInit():void{
    this._DisplayService.displaycateo().subscribe({
      next:(Response)=>{this.categories=Response.data},
      error:(err)=>{console.log(err);}

    });
  }

}
