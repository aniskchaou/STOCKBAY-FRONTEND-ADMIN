import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import ProductValidation from 'src/app/main/validations/ProductValidation';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends URLLoader implements OnInit {

  productForm: FormGroup
  msg: ProductMessage
  submitted = false


  get f() { return this.productForm.controls; }

  constructor(private validation: ProductValidation, private message: ProductMessage,
    private ProductTestService: ProductTestService) {
    super()
    this.productForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.productForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.ProductTestService.create(this.productForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }
}
