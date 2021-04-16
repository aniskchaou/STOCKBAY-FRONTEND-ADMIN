export default class Revenue {
    id: number
    income_paymentDate: string
    customer_id: string
    income_paymentType: string
    income_paymentAccount: string
    income_amount: string
    income_details: string


    constructor(
        id: number,
        income_paymentDate: string,
        customer_id: string,
        income_paymentType: string,
        income_paymentAccount: string,
        income_amount: string,
        income_details: string
    ) {
        this.id = id
        this.income_paymentDate = income_paymentDate
        this.customer_id = customer_id
        this.income_paymentType = income_paymentType
        this.income_paymentAccount = income_paymentAccount
        this.income_amount = income_amount
        this.income_details = income_details
    }


}