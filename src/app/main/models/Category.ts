export default class Category {
    id: number
    category_name: string
    status_id: string
    category_details: string


    constructor(
        id: number,
        category_name: string,
        status_id: string,
        category_details: string
    ) {
        this.id = id
        this.category_name = category_name
        this.status_id = status_id
        this.category_details = category_details
    }

}