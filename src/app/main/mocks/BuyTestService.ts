import { Injectable } from "@angular/core";
import Service from "../interfaces/Service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export default class BuyTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _buy = []
    static id = 0

    public getAll() {
        return this._buy;
    }

    public get(id) {
        return this._buy.find(item => item.id === parseInt(id));
    };

    public create(data) {
        BuyTestService.id++
        data["id"] = BuyTestService.id
        this._buy.push(data);
    };

    public update(data) {

        var foundIndex = this._buy.findIndex(item => item.id === data.id);
        this._buy[foundIndex] = data;
    };

    public remove(id) {

        var index = this._buy.findIndex(item => item.id === id);
        if (index != -1) {
            this._buy.splice(index, 1);
        }
    };


}