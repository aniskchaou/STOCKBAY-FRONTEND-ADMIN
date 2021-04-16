import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import SupplierMessage from 'src/app/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';
import Supplier from 'src/app/main/models/Supplier';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent extends URLLoader implements OnInit {

  model: Supplier


  constructor(private supplierTestService: SupplierTestService,
    private message: SupplierMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Supplier(0, '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.supplierTestService.ID.subscribe(idd => {

      this.model = this.supplierTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.supplierTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
