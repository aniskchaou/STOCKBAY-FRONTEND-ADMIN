export default class Client {
    id: number
    customer_name: string
    customer_phone: string
    customer_address: string
    customer_email: string
    status_id: string
    customer_description: string


    constructor(
        id: number,
        customer_name: string,
        customer_phone: string,
        customer_address: string,
        customer_email: string,
        status_id: string,
        customer_description: string
    ) {
        this.id = id
        this.customer_name = customer_name
        this.customer_phone = customer_phone
        this.customer_address = customer_address
        this.customer_email = customer_email
        this.status_id = status_id
        this.customer_description = customer_description
    }

}