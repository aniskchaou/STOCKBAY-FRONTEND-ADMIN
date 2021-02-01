import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-revenue',
  templateUrl: './add-revenue.component.html',
  styleUrls: ['./add-revenue.component.css']
})
export class AddRevenueComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {

  }

  add() {
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
