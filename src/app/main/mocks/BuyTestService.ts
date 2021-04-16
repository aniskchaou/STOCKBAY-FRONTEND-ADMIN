import { Injectable } from "@angular/core";
import Service from "../interfaces/Service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export default class BuyTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _buy = [{
        "id": 1,
        "supplier": "Hp",
        "purchase_invoiceNo": "233",
        "purchase_status": "active",
        "purchase_date": "12 / 22 / 2020"
    }]



    static id = 0

    public getAll() {
        return BuyTestService._buy;
    }

    public get(id) {
        return BuyTestService._buy.find(item => item.id === parseInt(id));
    };

    public create(data) {
        BuyTestService.id++
        data["id"] = BuyTestService.id
        BuyTestService._buy.push(data);
    };

    public update(data) {

        var foundIndex = BuyTestService._buy.findIndex(item => item.id === data.id);
        BuyTestService._buy[foundIndex] = data;
    };

    public remove(id) {

        var index = BuyTestService._buy.findIndex(item => item.id === id);
        if (index != -1) {
            BuyTestService._buy.splice(index, 1);
        }
    };


}