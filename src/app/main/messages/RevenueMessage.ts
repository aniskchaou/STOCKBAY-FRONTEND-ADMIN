import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class RevenueMessage {

    confirmations = {
        'title': 'confirmation', 'add': 'revenue a été ajouté avec succès',
        'edit': 'revenue a été modifié avec succès',
        'delete': 'revenue a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}