import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class IncomeTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _income = []
    static id = 0

    public getAll() {
        return this._income;
    }

    public get(id) {
        return this._income.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = IncomeTestService.id
        this._income.push(data);
        IncomeTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._income.findIndex(item => item === old);
        this._income[foundIndex] = data;
    };

    public remove(id) {
        this._income.splice(id, 1);
    };


}