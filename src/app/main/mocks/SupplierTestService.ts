import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SupplierTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _supplier = []
    static id = 0

    public getAll() {
        return this._supplier;
    }

    public get(id) {
        return this._supplier.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SupplierTestService.id
        this._supplier.push(data);
        SupplierTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._supplier.findIndex(item => item === old);
        this._supplier[foundIndex] = data;
    };

    public remove(id) {
        this._supplier.splice(id, 1);
    };


}