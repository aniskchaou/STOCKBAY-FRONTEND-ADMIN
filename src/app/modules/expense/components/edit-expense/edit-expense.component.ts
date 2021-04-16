import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import Expense from 'src/app/main/models/Expense';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent extends URLLoader implements OnInit {

  model: Expense


  constructor(private expenseTestService: ExpenseTestService,
    private message: ExpenseMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Expense(0, '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.expenseTestService.ID.subscribe(idd => {

      this.model = this.expenseTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.expenseTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
