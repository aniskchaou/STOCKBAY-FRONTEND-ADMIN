import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import ExpenseValidation from 'src/app/main/validations/ExpenseValidation';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent extends URLLoader implements OnInit {

  expenseForm: FormGroup
  msg: ExpenseMessage
  submitted = false


  get f() { return this.expenseForm.controls; }

  constructor(private validation: ExpenseValidation, private message: ExpenseMessage,
    private ExpenseTestService: ExpenseTestService) {
    super()
    this.expenseForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.expenseForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.ExpenseTestService.create(this.expenseForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }
}
