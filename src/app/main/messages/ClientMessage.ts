import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ClientMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'client a été ajouté avec succès',
        'edit': 'client a été modifié avec succès',
        'delete': 'client a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}