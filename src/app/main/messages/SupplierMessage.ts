import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SupplierMessage {

    confirmations = {
        'title': 'confirmation', 'add': 'fournisseur a été ajouté avec succès',
        'edit': 'fournisseur a été modifié avec succès',
        'delete': 'fournisseur a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}