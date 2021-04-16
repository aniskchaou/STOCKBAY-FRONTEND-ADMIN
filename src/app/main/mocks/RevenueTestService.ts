import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class RevenueTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _revenue = [{
        "id": 1,
        "income_paymentDate": "23 / 10 / 2020",
        "customer_id": "ReviewCareers",
        "income_paymentType": "Chèque",
        "income_paymentAccount": "FRA 3555 6664 3444 23",
        "income_amount": "23232",
        "income_details": "string"
    }]

    static id = 0

    public getAll() {
        return RevenueTestService._revenue;
    }

    public get(id) {
        return RevenueTestService._revenue.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = RevenueTestService.id
        RevenueTestService._revenue.push(data);
        RevenueTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = RevenueTestService._revenue.findIndex(item => item.id === data.id);
        RevenueTestService._revenue[foundIndex] = data;
    };

    public remove(id) {
        RevenueTestService._revenue.splice(id, 1);
    };


}