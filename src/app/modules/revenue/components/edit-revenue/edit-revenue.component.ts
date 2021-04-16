import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import Revenue from 'src/app/main/models/Revenue';

@Component({
  selector: 'app-edit-revenue',
  templateUrl: './edit-revenue.component.html',
  styleUrls: ['./edit-revenue.component.css']
})
export class EditRevenueComponent extends URLLoader implements OnInit {

  model: Revenue


  constructor(private revenueTestService: RevenueTestService,
    private message: RevenueMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Revenue(0, '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.revenueTestService.ID.subscribe(idd => {

      this.model = this.revenueTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.revenueTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
