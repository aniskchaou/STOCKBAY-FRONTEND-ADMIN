import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import IncomeMessage from 'src/app/main/messages/IncomeMessage';
import IncomeTestService from 'src/app/main/mocks/IncomeTestService';
import Income from 'src/app/main/models/Income';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css']
})
export class EditIncomeComponent extends URLLoader implements OnInit {

  model: Income


  constructor(private incomeTestService: IncomeTestService,
    private message: IncomeMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Income(0, '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.incomeTestService.ID.subscribe(idd => {

      this.model = this.incomeTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.incomeTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
