import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import SellMessage from 'src/app/main/messages/SellMessage';
import SaleTestService from 'src/app/main/mocks/SaleTestService';
import SellValidation from 'src/app/main/validations/SellValidation';

@Component({
  selector: 'app-add-sell',
  templateUrl: './add-sell.component.html',
  styleUrls: ['./add-sell.component.css']
})
export class AddSellComponent extends URLLoader implements OnInit {

  sellForm: FormGroup
  msg: SellMessage
  submitted = false


  get f() { return this.sellForm.controls; }

  constructor(private validation: SellValidation, private message: SellMessage, private SellTestService: SaleTestService) {
    super()
    this.sellForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.sellForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.SellTestService.create(this.sellForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }
}
