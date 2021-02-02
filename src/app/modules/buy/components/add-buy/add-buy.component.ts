import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/buy';
import BuyValidation from 'src/app/main/validations/buy'
import { BuyComponent } from '../buy/buy.component';

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

  constructor(private validation: BuyValidation, private message: BuyMessage) {
    super()
    this.buyForm = this.validation.formGroupInstance
    this.msg = this.message
  }



  ngOnInit(): void {
  }

  add() {
    this.submitted = true;
    this.validation.checkValidation()
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
