export default class Product {
    id: number
    product_name: string
    category_id: string
    supplier_id: string
    product_unit: string
    product_alertquantity: string
    product_supplierPrice: string
    product_sellPrice: string
    product_code: string
    product_tax: string
    warehouse_id: string
    product_details: string
    product_detailsforinvoice: string

    constructor(
        id: number,
        product_name: string,
        category_id: string,
        supplier_id: string,
        product_unit: string,
        product_alertquantity: string,
        product_supplierPrice: string,
        product_sellPrice: string,
        product_code: string,
        product_tax: string,
        warehouse_id: string,
        product_details: string,
        product_detailsforinvoice: string
    ) {
        this.id = id
        this.product_name = product_name
        this.category_id = category_id
        this.supplier_id = supplier_id
        this.product_unit = product_unit
        this.product_alertquantity = product_alertquantity
        this.product_supplierPrice = product_supplierPrice
        this.product_sellPrice = product_sellPrice
        this.product_code = product_code
        this.product_tax = product_tax
        this.warehouse_id = warehouse_id
        this.product_details = product_details
        this.product_detailsforinvoice = product_detailsforinvoice
    }

}