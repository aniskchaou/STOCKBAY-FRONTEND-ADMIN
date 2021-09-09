import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ExpenseMessage {

    confirmations = {
        'title': 'confirmation', 
        'add': 'Expense has been added',
        'edit': 'dépense a été modifié avec succès',
        'delete': 'Expense has been removed'
    }
    validations = {
        id: 1,
        "expense_paymentDate": "Payment Date is required",
        "supplier_id": "Supplier is required",
        "expense_paymentType": "Payment type is required",
        "expense_paymentAccount": "Payment account is required",
        "expense_amount": "Amount is required",
        "expense_details": ""
    }

    constructor() {

    }
}