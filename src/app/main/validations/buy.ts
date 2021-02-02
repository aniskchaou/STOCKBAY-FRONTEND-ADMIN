
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class BuyValidation {
    formGroup: FormGroup;





    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }

    constructor() {
        this.formGroup = this.createFormGroup()
    }

    public checkValidation() {

        if (this.formGroup.invalid) {
            return;
        }
    }
    createFormGroup() {
        return new FormGroup({

            supplier: new FormControl(),
            product_id: new FormControl(),
            date_buy: new FormControl('', Validators.required),
            purchase_invoiceNo: new FormControl('', Validators.required),
            purchase_status: new FormControl(),
        })
    }
}
