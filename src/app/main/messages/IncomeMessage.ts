import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class IncomeMessage {

    confirmations = {
        'title': 'confirmation',
         'add': 'Income has been added',
        'edit': 'achat a été modifié avec succès',
        'delete': 'Income has been removed'
    }
    validations = {
        "income_paymentDate": "Payment date is required",
        "customer_id": "Customer is required",
        "income_paymentType": "Payment type is required",
        "income_paymentAccount": "Payment account",
        "income_amount": "Income amount is required",
        "income_details": "Details isrequired"
    }

    constructor() {

    }
}