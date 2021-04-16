import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ProductMessage {

    confirmations = {
        'title': 'confirmation', 'add': 'produit a été ajouté avec succès',
        'edit': 'produit a été modifié avec succès',
        'delete': 'produit a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}