import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BuyMessage {

    confirmations = {
        'title': 'Confirmation',
        'add': 'Purchases has been added',
        'edit': 'achat a été modifié avec succès',
        'delete': 'Purchases has been removed'
    }
    validationMessage = {
         "supplier": "Supplier is required",
        "purchase_invoiceNo": "Invoice is required",
        "purchase_status": "Status is required",
        "purchase_date": "Date is required"
    }

    constructor() {

    }
}