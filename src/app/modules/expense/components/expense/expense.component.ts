import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../configs/URLLoader';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
    super.loadScripts()
  }

}
