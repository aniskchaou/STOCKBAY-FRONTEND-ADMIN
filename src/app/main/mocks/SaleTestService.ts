import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SaleTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _sale = [{
        "id": 1,
        "customer_id": "VoiceTower",
        "sale_date": "22 / 4 / 2020",
        "sale_status": "Active",
        "sale_invoiceNo": "7F76F67"
    }]


    static id = 0

    public getAll() {
        return SaleTestService._sale;
    }

    public get(id) {
        return SaleTestService._sale.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SaleTestService.id
        SaleTestService._sale.push(data);
        SaleTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = SaleTestService._sale.findIndex(item => item.id === data.id);
        SaleTestService._sale[foundIndex] = data;
    };

    public remove(id) {
        SaleTestService._sale.splice(id, 1);
    };


}