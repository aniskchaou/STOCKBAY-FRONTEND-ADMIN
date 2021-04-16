import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class CategoryMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'catégorie a été ajouté avec succès',
        'edit': 'catégorie a été modifié avec succès',
        'delete': 'catégorie a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}