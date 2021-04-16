import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BuyMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'achat a été ajouté avec succès',
        'edit': 'achat a été modifié avec succès',
        'delete': 'achat a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}