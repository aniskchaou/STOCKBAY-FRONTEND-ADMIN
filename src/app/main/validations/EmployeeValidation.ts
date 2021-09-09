
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class EmployeeValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
            nid: new FormControl('', Validators.required),
            status_id: new FormControl('', Validators.required),
            birthday: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            salary: new FormControl('', Validators.required),

        })
    }
}
