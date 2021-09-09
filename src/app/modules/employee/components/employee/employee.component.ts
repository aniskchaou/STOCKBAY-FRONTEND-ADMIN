import { Component, OnInit } from '@angular/core';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  employees$
  id = 0


  constructor(private employeeTestService: EmployeeTestService, private messageService: EmployeeMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.employeeTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.employeeTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.employees$ = this.employeeTestService.getAll()

  }

}
