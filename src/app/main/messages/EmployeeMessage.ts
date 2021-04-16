import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class EmployeeMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'employée a été ajouté avec succès',
        'edit': 'employée a été modifié avec succès',
        'delete': 'employée a été supprimé avec succès'
    }
    validations = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}