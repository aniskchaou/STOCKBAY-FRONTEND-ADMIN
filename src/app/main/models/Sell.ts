export default class Sell {
    id: number
    customer_id: string
    sale_date: string
    sale_status: string
    sale_invoiceNo: string


    constructor(
        id: number,
        customer_id: string,
        sale_date: string,
        sale_status: string,
        sale_invoiceNo: string
    ) {
        this.id = id
        this.customer_id = customer_id
        this.sale_date = sale_date
        this.sale_status = sale_status
        this.sale_invoiceNo = sale_invoiceNo
    }

}