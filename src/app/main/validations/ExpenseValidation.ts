
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

            expense_paymentDate: new FormControl('', Validators.required),
            supplier_id: new FormControl('', Validators.required),
            expense_paymentType: new FormControl('', Validators.required),
            expense_paymentAccount: new FormControl('', Validators.required),
            expense_amount: new FormControl('', Validators.required),
            expense_details: new FormControl('', Validators.required),


        })
    }
}
