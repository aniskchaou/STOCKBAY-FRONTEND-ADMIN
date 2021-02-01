import { Component, OnInit } from '@angular/core';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
  super.loadScripts();

}

}
