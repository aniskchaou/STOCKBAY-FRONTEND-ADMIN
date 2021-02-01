import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')

  }
}
