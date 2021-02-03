import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class RevenueTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _revenue = []
    static id = 0

    public getAll() {
        return this._revenue;
    }

    public get(id) {
        return this._revenue.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = RevenueTestService.id
        this._revenue.push(data);
        RevenueTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._revenue.findIndex(item => item === old);
        this._revenue[foundIndex] = data;
    };

    public remove(id) {
        this._revenue.splice(id, 1);
    };


}