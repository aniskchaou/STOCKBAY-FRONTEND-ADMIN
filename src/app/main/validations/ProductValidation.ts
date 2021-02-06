
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class ProductValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            product_name: new FormControl('', Validators.required),
            category_id: new FormControl('', Validators.required),
            supplier_id: new FormControl('', Validators.required),
            product_unit: new FormControl('', Validators.required),
            product_alertquantity: new FormControl('', Validators.required),
            product_supplierPrice: new FormControl('', Validators.required),
            product_sellPrice: new FormControl('', Validators.required),
            product_code: new FormControl('', Validators.required),
            product_tax: new FormControl('', Validators.required),
            warehouse_id: new FormControl('', Validators.required),
            product_details: new FormControl('', Validators.required),
            product_detailsforinvoice: new FormControl('', Validators.required),

        })
    }
}
