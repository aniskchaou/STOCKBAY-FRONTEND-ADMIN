import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ClientMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'Client has been added',
        'edit': 'client a été modifié avec succès',
        'delete': 'Client has been removed'
    }
    validations = {
       
        "customer_name": "Client is required", 
        "customer_email": "Email is required",
        "customer_phone": "Phone is required", 
        "customer_address": "Address is required",
        "status_id": "Status is required", 
        "customer_description": "Description is required"
    
    }

    constructor() {

    }
}