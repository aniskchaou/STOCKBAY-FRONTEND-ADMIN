import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class EmployeeMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'Employee has been added',
        'edit': 'employée a été modifié avec succès',
        'delete': 'Employee has been removed'
    }
    validations = {
          "employee_fname": "Name is required",
        "employee_email": "Email is required",
        "employee_phone": "Phone is required",
        "employee_gender": "Gender is required",
        "employee_nid": "",
        "status_id": "Status is required",
        "employee_birthday": "Bierthday is required",
        "employee_address": "Address is required",
        "employee_salary": "Salary is required"
    }

    constructor() {

    }
}