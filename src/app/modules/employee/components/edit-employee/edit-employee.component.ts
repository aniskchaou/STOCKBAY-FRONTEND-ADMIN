import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import Employee from 'src/app/main/models/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent extends URLLoader implements OnInit {

  model: Employee


  constructor(private employeeTestService: EmployeeTestService,
    private message: EmployeeMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Employee(0, '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.employeeTestService.ID.subscribe(idd => {

      this.model = this.employeeTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.employeeTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
