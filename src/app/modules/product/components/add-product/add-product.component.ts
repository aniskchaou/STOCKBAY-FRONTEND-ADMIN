import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
