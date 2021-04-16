import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SupplierTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _supplier = [{
        "id": 1,
        "supplier_name": "CommonFit",
        "supplier_phone": "05.13.88.01.67",
        "supplier_email": "FabriceLesperance@armyspy.com",
        "supplier_company": "string",
        "supplier_address": "rue des Coudriers 31600 MURET",
        "status_id": "string",
        "supplier_description": "string"
    }]

    static id = 0

    public getAll() {
        return SupplierTestService._supplier;
    }

    public get(id) {
        return SupplierTestService._supplier.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SupplierTestService.id
        SupplierTestService._supplier.push(data);
        SupplierTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = SupplierTestService._supplier.findIndex(item => item.id === data.id);
        SupplierTestService._supplier[foundIndex] = data;
    };

    public remove(id) {
        SupplierTestService._supplier.splice(id, 1);
    };


}