import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class StockTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _stock = []
    static id = 0

    public getAll() {
        return this._stock;
    }

    public get(id) {
        return this._stock.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = StockTestService.id
        this._stock.push(data);
        StockTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._stock.findIndex(item => item === old);
        this._stock[foundIndex] = data;
    };

    public remove(id) {
        this._stock.splice(id, 1);
    };


}