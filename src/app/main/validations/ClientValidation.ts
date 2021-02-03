
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class ClientValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            customer_name: new FormControl('', Validators.required),
            customer_phone: new FormControl('', Validators.required),
            customer_address: new FormControl('', Validators.required),
            customer_email: new FormControl('', Validators.required),
            status_id: new FormControl('', Validators.required),
            customer_description: new FormControl('', Validators.required),


        })
    }
}
