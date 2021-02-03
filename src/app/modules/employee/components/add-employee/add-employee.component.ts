import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import EmployeeValidation from 'src/app/main/validations/EmployeeValidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent extends URLLoader implements OnInit {

  employeeForm: FormGroup
  msg: EmployeeMessage
  submitted = false


  get f() { return this.employeeForm.controls; }

  constructor(private validation: EmployeeValidation, private message: EmployeeMessage,
    private ExpenseTestService: EmployeeTestService) {
    super()
    this.employeeForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.employeeForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.ExpenseTestService.create(this.employeeForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }

}
