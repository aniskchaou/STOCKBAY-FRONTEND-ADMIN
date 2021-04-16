import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class EmployeeTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _employee = [{
        "id": 1,
        "employee_fname": "Eglantine Deschênes",
        "employee_email": "EglantineDeschenes@teleworm.us",
        "employee_phone": "01.50.38.11.50",
        "employee_gender": "string",
        "employee_nid": "string",
        "status_id": "active",
        "employee_birthday": "string",
        "employee_address": "84, Quai des Belges 77100 MEAUX",
        "employee_salary": "33.000"
    }]



    static id = 0

    public getAll() {
        return EmployeeTestService._employee;
    }

    public get(id) {
        return EmployeeTestService._employee.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = EmployeeTestService.id
        EmployeeTestService._employee.push(data);
        EmployeeTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = EmployeeTestService._employee.findIndex(item => item.id === data.id);
        EmployeeTestService._employee[foundIndex] = data;
    };

    public remove(id) {
        EmployeeTestService._employee.splice(id, 1);
    };


}