import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ExpenseTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _stock = [{
        id: 1,
        "expense_paymentDate": "22/11/2020",
        "supplier_id": "string",
        "expense_paymentType": "virement",
        "expense_paymentAccount": "FRA 3423 434 23423",
        "expense_amount": "34234",
        "expense_details": "string"
    }]
    static id = 0

    public getAll() {
        return ExpenseTestService._stock;
    }

    public get(id) {
        return ExpenseTestService._stock.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ExpenseTestService.id
        ExpenseTestService._stock.push(data);
        ExpenseTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = ExpenseTestService._stock.findIndex(item => item.id === data.id);
        ExpenseTestService._stock[foundIndex] = data;
    };

    public remove(id) {
        ExpenseTestService._stock.splice(id, 1);
    };


}