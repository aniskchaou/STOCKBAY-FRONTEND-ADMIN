import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyValidation from 'src/app/main/validations/BuyValidation'
import { BuyComponent } from '../buy/buy.component';
import BuyTestService from 'src/app/main/mocks/BuyTestService'
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-add-buy',
  templateUrl: './add-buy.component.html',
  styleUrls: ['./add-buy.component.css']
})

export class AddBuyComponent extends URLLoader implements OnInit {

  buyForm: FormGroup
  msg: BuyMessage
  submitted = false
  

  get f() { return this.buyForm.controls; }

  constructor(private validation: BuyValidation, private message: BuyMessage, private buyTestService: BuyTestService) {
    super()
    this.buyForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.buyForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.buyTestService.create(this.buyForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }



  }
}
