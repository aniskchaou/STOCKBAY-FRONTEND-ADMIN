
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class BuyValidation extends Validation {

    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            supplier: new FormControl(),
            product_id: new FormControl(),
            purchase_date: new FormControl('', Validators.required),
            purchase_invoiceNo: new FormControl('', Validators.required),
            purchase_status: new FormControl('', Validators.required),
        })
    }
}
