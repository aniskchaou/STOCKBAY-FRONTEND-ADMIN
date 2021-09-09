import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/main/models/Stock';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent extends URLLoader implements OnInit {

   stock$:Stock[]=[{
        "id": 1,
        "name": "",
        "status": "",
        "details": ""
    }]

  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}

}
