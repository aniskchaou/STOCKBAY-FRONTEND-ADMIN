import { FormGroup } from "@angular/forms";

export default class Validation {
    formGroup: FormGroup;

    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }



    public checkValidation() {

        if (this.formGroup.invalid) {
            return false;
        }
        return true;
    }
}