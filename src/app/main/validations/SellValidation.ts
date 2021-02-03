
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class SupplierValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            customer_id: new FormControl('', Validators.required),
            sale_date: new FormControl('', Validators.required),
            sale_status: new FormControl('', Validators.required),
            sale_invoiceNo: new FormControl('', Validators.required),


        })
    }
}
