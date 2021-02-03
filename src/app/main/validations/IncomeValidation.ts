
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class IncomeValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            employee_fname: new FormControl('', Validators.required),
            employee_email: new FormControl('', Validators.required),
            employee_phone: new FormControl('', Validators.required),
            employee_gender: new FormControl('', Validators.required),
            employee_nid: new FormControl('', Validators.required),
            status_id: new FormControl('', Validators.required),
            employee_birthday: new FormControl('', Validators.required),
            employee_address: new FormControl('', Validators.required),
            employee_salary: new FormControl('', Validators.required),

        })
    }
}
