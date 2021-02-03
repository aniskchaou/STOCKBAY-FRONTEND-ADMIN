import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import IncomeMessage from 'src/app/main/messages/IncomeMessage';
import IncomeTestService from 'src/app/main/mocks/IncomeTestService';
import IncomeValidation from 'src/app/main/validations/IncomeValidation';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent extends URLLoader implements OnInit {

  incomeForm: FormGroup
  msg: IncomeMessage
  submitted = false


  get f() { return this.incomeForm.controls; }

  constructor(private validation: IncomeValidation, private message: IncomeMessage,
    private ExpenseTestService: IncomeTestService) {
    super()
    this.incomeForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.incomeForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.ExpenseTestService.create(this.incomeForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }
}
