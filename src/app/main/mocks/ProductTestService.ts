import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ProductTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _product = []
    static id = 0

    public getAll() {
        return this._product;
    }

    public get(id) {
        return this._product.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ProductTestService.id
        this._product.push(data);
        ProductTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._product.findIndex(item => item === old);
        this._product[foundIndex] = data;
    };

    public remove(id) {
        this._product.splice(id, 1);
    };


}