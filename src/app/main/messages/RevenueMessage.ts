import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class RevenueMessage {

    confirmations = { 'title': 'confirmation', 'add': 'achat a ete ajoute avec succes', 'edit': '', 'delete': '' }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}