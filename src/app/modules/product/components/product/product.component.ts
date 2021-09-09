import { Component, OnInit } from '@angular/core';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  products$
  id = 0


  constructor(private productTestService: ProductTestService, private messageService: ProductMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.productTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.productTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.products$ = this.productTestService.getAll()

  }

}
