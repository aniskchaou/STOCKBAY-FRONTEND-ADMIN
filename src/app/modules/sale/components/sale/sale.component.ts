import { Component, OnInit } from '@angular/core';
import SellMessage from 'src/app/main/messages/SellMessage';
import SaleTestService from 'src/app/main/mocks/SaleTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  sells$
  id = 0


  constructor(private sellTestService: SaleTestService, private messageService: SellMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.sellTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.sellTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.sells$ = this.sellTestService.getAll()

  }

}
