export default class Expense {
    id: number
    expense_paymentDate: string
    supplier_id: string
    expense_paymentType: string
    expense_paymentAccount: string
    expense_amount: string
    expense_details: string


    constructor(
        id: number,
        expense_paymentDate: string,
        supplier_id: string,
        expense_paymentType: string,
        expense_paymentAccount: string,
        expense_amount: string,
        expense_details: string
    ) {
        this.id = id
        this.expense_paymentDate = expense_paymentDate
        this.supplier_id = supplier_id
        this.expense_paymentType = expense_paymentType
        this.expense_paymentAccount = expense_paymentAccount
        this.expense_amount = expense_amount
        this.expense_details = expense_details
    }

}