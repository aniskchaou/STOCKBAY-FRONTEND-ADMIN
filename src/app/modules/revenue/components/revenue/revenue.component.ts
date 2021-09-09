import { Component, OnInit } from '@angular/core';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  revenues$
  id = 0


  constructor(private revenueTestService: RevenueTestService, private messageService: RevenueMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.revenueTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.revenueTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.revenues$ = this.revenueTestService.getAll()

  }

}
