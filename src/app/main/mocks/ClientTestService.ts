import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ClientTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _client = [{
        "id": 1, "customer_name": "Vernon Favreau", "customer_email": "VernonFavreau@dayrep.com",
        "customer_phone": "03.92.27.52.78", "customer_address": "47, Chemin Du Lavarin Sud 62100 CALAIS",
        "status_id": "Active", "customer_description": ""
    }]
    static id = 0

    public getAll() {
        return ClientTestService._client;
    }

    public get(id) {
        return ClientTestService._client.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ClientTestService.id
        ClientTestService._client.push(data);
        ClientTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = ClientTestService._client.findIndex(item => item.id === data.id);
        ClientTestService._client[foundIndex] = data;
    };

    public remove(id) {
        ClientTestService._client.splice(id, 1);
    };


}