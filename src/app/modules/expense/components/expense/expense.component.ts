import { Component, OnInit } from '@angular/core';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent extends URLLoader implements OnInit {


  expenses$
  id = 0


  constructor(private expenseTestService: ExpenseTestService, private messageService: ExpenseMessage) {
      super()

    }
  
  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.expenseTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.expenseTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.expenses$ = this.expenseTestService.getAll()

    }

}
