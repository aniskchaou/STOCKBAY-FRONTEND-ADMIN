export default class Supplier {
    id: number
    supplier_name: string
    supplier_phone: string
    supplier_email: string
    supplier_company: string
    supplier_address: string
    status_id: string
    supplier_description: string


    constructor(
        id: number,
        supplier_name: string,
        supplier_phone: string,
        supplier_email: string,
        supplier_company: string,
        supplier_address: string,
        status_id: string,
        supplier_description: string
    ) {
        this.id = id
        this.supplier_name = supplier_name
        this.supplier_phone = supplier_phone
        this.supplier_email = supplier_email
        this.supplier_company = supplier_company
        this.supplier_address = supplier_address
        this.status_id = status_id
        this.supplier_description = supplier_description
    }

}