import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class RevenueMessage {

    confirmations = {
        'title': 'confirmation',
         'add': 'Income has been added',
        'edit': 'revenue a été modifié avec succès',
        'delete': 'Income has been removed'
    }
    validations = {
        
        "income_paymentDate": "Payment date is required",
        "customer_id": "Customer is required",
        "income_paymentType": "Payment Type is required",
        "income_paymentAccount": "Account is required",
        "income_amount": "Amount is required",
        "income_details": "Details is required"
    }

    constructor() {

    }
}