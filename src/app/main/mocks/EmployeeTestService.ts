import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class EmployeeTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _employee = []
    static id = 0

    public getAll() {
        return this._employee;
    }

    public get(id) {
        return this._employee.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = EmployeeTestService.id
        this._employee.push(data);
        EmployeeTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._employee.findIndex(item => item === old);
        this._employee[foundIndex] = data;
    };

    public remove(id) {
        this._employee.splice(id, 1);
    };


}