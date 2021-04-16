import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import Product from 'src/app/main/models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent extends URLLoader implements OnInit {

  model: Product


  constructor(private productTestService: ProductTestService,
    private message: ProductMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Product(0, '', '', '', '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.productTestService.ID.subscribe(idd => {

      this.model = this.productTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.productTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
