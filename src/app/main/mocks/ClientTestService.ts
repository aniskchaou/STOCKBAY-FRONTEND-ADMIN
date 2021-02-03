import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ClientTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _client = []
    static id = 0

    public getAll() {
        return this._client;
    }

    public get(id) {
        return this._client.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ClientTestService.id
        this._client.push(data);
        ClientTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._client.findIndex(item => item === old);
        this._client[foundIndex] = data;
    };

    public remove(id) {
        this._client.splice(id, 1);
    };


}