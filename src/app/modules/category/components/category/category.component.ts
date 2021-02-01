import { Component, OnInit } from '@angular/core';
import { URLLoader } from '../../../../main/configs/URLLoader';
import showMessage from '../../../../main/notification/notification'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

  ngOnInit() {

 super.loadScripts();
}

}
