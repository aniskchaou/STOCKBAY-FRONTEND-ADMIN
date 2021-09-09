import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SupplierMessage {

    confirmations = {
        'title': 'confirmation', 
        'add': 'Supplier has been added',
        'edit': 'fournisseur a été modifié avec succès',
        'delete': 'Supplier has been removed'
    }
    validations = {
        "id": 1,
        "supplier_name": "Supplier is required",
        "supplier_phone": "Phone is required",
        "supplier_email": "Email is required",
        "supplier_company": "Company is required",
        "supplier_address": "Address is required",
        "status_id": "Status is required",
        "supplier_description": "Description is required"
    }

    constructor() {

    }
}