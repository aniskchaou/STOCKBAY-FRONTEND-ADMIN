
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class RevenueValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            income_paymentDate: new FormControl('', Validators.required),
            customer_id: new FormControl('', Validators.required),
            income_paymentType: new FormControl('', Validators.required),
            income_paymentAccount: new FormControl('', Validators.required),
            income_amount: new FormControl('', Validators.required),
            income_details: new FormControl('', Validators.required),


        })
    }
}
