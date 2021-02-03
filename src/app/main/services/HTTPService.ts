
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Service from '../interfaces/Service';
import URLS from '../urls/urls';

@Injectable({
    providedIn: 'root'
})

export class HTTPService implements Service {

    headers = { 'content-type': 'application/json' }
    model = ''
    constructor(private http: HttpClient) {
    }
    update(old: any, data: any) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        return this.http.get(URLS.URL_BASE + this.model + "/all");
    }
    get(id: any) {
        return this.http.get(URLS.URL_BASE + this.model + "/" + id);
    }
    async create(data) {
        const body = JSON.stringify(data);
        await this.http.post(URLS.URL_BASE + this.model + "/create", body,
            { 'headers': this.headers }).toPromise();
    }
    async remove(id: any) {
        await this.http.delete(URLS.URL_BASE + this.model + "/delete/" + id, {
            headers: new HttpHeaders(this.headers)
        }).toPromise();
    }


}