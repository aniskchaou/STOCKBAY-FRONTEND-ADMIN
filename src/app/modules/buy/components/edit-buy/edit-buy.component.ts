import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyTestService from 'src/app/main/mocks/BuyTestService';
import Buy from 'src/app/main/models/Buy';

@Component({
  selector: 'app-edit-buy',
  templateUrl: './edit-buy.component.html',
  styleUrls: ['./edit-buy.component.css']
})
export class EditBuyComponent extends URLLoader implements OnInit {


  model: Buy = new Buy(0, '', '', '', '')

  constructor(private buyTestService: BuyTestService, private message: BuyMessage) {
    super()
    this.model = new Buy(0, '', '', '', '');
  }


  ngOnInit(): void {

    this.buyTestService.ID.subscribe(idd => {
      this.model = this.buyTestService.get(idd)
      console.log(this.model)
      if (this.model == undefined) {
        this.model = new Buy(0, '', '', '', '');
      }
    })
  }

  edit() {
    this.buyTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }
}
