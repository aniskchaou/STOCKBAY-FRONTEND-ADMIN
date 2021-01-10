import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../configs/URLLoader';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}

}
