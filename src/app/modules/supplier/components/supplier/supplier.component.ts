import { Component, OnInit } from '@angular/core';
import SupplierMessage from 'src/app/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  suppliers$
  id = 0


  constructor(private supplierTestService: SupplierTestService, private messageService: SupplierMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.supplierTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.supplierTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.suppliers$ = this.supplierTestService.getAll()

  }

}
