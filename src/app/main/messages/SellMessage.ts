import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SellMessage {

    confirmations = {
        'title': 'confirmation', 'add': 'vente a été ajouté avec succès',
        'edit': 'vente a été modifié avec succès',
        'delete': 'vente a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}