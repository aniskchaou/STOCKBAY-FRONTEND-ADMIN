
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

            supplier_name: new FormControl('', Validators.required),
            supplier_phone: new FormControl('', Validators.required),
            supplier_email: new FormControl('', Validators.required),
            supplier_company: new FormControl('', Validators.required),
            supplier_address: new FormControl('', Validators.required),
            status_id: new FormControl('', Validators.required),
            supplier_description: new FormControl('', Validators.required),

        })
    }
}
