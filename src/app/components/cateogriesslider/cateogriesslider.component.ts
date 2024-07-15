import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-cateogriesslider',
  templateUrl: './cateogriesslider.component.html',
  styleUrls: ['./cateogriesslider.component.css']
})
export class CateogriessliderComponent {

  constructor(private _DisplayService:DisplayService){}
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  displaycateogries:any;


  ngOnInit(){
    
    this._DisplayService.displaycateo().subscribe({
      next:(Response)=>{this.displaycateogries=Response.data},
      error:(err)=>{console.log(err);}
    })
  }

}
