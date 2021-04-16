import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class IncomeTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _income = []
    static id = 0

    public getAll() {
        return IncomeTestService._income;
    }

    public get(id) {
        return IncomeTestService._income.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = IncomeTestService.id
        IncomeTestService._income.push(data);
        IncomeTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = IncomeTestService._income.findIndex(item => item.id === data.id);
        IncomeTestService._income[foundIndex] = data;
    };

    public remove(id) {
        IncomeTestService._income.splice(id, 1);
    };


}