
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class CategoryValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            category_name: new FormControl('', Validators.required),
            status_id: new FormControl('', Validators.required),
            category_details: new FormControl('', Validators.required),

        })
    }
}
