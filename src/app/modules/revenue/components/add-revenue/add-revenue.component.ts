import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import RevenueValidation from 'src/app/main/validations/RevenueValidation.';

@Component({
  selector: 'app-add-revenue',
  templateUrl: './add-revenue.component.html',
  styleUrls: ['./add-revenue.component.css']
})
export class AddRevenueComponent extends URLLoader implements OnInit {

  revenueForm: FormGroup
  msg: RevenueMessage
  submitted = false


  get f() { return this.revenueForm.controls; }

  constructor(private validation: RevenueValidation, private message: RevenueMessage, private RevenueTestService: RevenueTestService) {
    super()
    this.revenueForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.revenueForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.RevenueTestService.create(this.revenueForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }
}
