import { Component, OnInit } from '@angular/core';
import ClientMessage from 'src/app/main/messages/ClientMessage';
import ClientTestService from 'src/app/main/mocks/ClientTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  clients$
  id = 0


  constructor(private clientTestService: ClientTestService, private messageService: ClientMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.clientTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.clientTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.clients$ = this.clientTestService.getAll()

  }

}
