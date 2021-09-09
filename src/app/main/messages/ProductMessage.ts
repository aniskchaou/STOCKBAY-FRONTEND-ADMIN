import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ProductMessage {

    confirmations = {
        'title': 'confirmation', 
        'add': 'Product has been added',
        'edit': 'produit a été modifié avec succès',
        'delete': 'Product has been removed'
    }
    validations = {
        "product_name": "Category name is required",
        "category_id": "Category id required",
        "supplier_id": "Supplier is required",
        "product_unit": "Unit is required",
        "product_alertquantity": "Quantity is required",
        "product_supplierPrice": "Price is required",
        "product_sellPrice": "Sell price is required",
        "product_code": "Code is required",
        "product_tax": "Tax is required",
        "warehouse_id": "Warehouse is required",
        "product_details": "",
        "product_detailsforinvoice": ""
    }

    constructor() {

    }
}