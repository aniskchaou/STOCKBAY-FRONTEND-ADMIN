

export default class Buy {
    id: number
    supplier: string
    purchase_invoiceNo: string
    purchase_status: string
    purchase_date: string

    constructor(
        id: number,
        supplier: string,
        purchase_invoiceNo: string,
        purchase_status: string,
        purchase_date: string
    ) {
        this.id = id
        this.supplier = supplier
        this.purchase_invoiceNo = purchase_invoiceNo
        this.purchase_status = purchase_status
        this.purchase_date = purchase_date
    }






}