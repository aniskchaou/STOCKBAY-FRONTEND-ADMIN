import { Component, OnInit } from '@angular/core';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyTestService from 'src/app/main/mocks/BuyTestService';

import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  buys$
  id = 0


  constructor(private buyTestService: BuyTestService, private messageService: BuyMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.buyTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.buyTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.buys$ = this.buyTestService.getAll()

  }
}
