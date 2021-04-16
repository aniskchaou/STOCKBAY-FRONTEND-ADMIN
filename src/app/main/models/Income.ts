export default class Income {
    id: number
    employee_fname: string
    employee_email: string
    employee_phone: string
    employee_gender: string
    employee_nid: string
    status_id: string
    employee_birthday: string
    employee_address: string
    employee_salary: string


    constructor(
        id: number,
        employee_fname: string,
        employee_email: string,
        employee_phone: string,
        employee_gender: string,
        employee_nid: string,
        status_id: string,
        employee_birthday: string,
        employee_address: string,
        employee_salary: string
    ) {
        this.id = id
        this.employee_fname = employee_fname
        this.employee_email = employee_email
        this.employee_phone = employee_phone
        this.employee_gender = employee_gender
        this.employee_nid = employee_nid
        this.status_id = status_id
        this.employee_birthday = employee_birthday
        this.employee_address = employee_address
        this.employee_salary = employee_salary
    }

}