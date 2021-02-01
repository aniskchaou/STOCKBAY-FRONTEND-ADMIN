import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
