import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ExpenseMessage {

    confirmations = {
        'title': 'confirmation', 'add': 'dépense a été ajouté avec succès',
        'edit': 'dépense a été modifié avec succès',
        'delete': 'dépense a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}