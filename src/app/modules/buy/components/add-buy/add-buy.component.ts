import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-buy',
  templateUrl: './add-buy.component.html',
  styleUrls: ['./add-buy.component.css']
})
export class AddBuyComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
