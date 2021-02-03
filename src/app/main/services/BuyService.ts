
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Service from '../interfaces/Service';
import URLS from '../urls/urls';

@Injectable({
    providedIn: 'root'
})

export class OfService implements Service {

    headers = { 'content-type': 'application/json' }

    constructor(private http: HttpClient) {
    }
    update(old: any, data: any) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        return this.http.get(URLS.URL_BASE + "/all");
    }
    get(id: any) {
        return this.http.get(URLS.URL_BASE + "/" + id);
    }
    async create(data) {
        const body = JSON.stringify(data);
        await this.http.post(URLS.URL_BASE + "/create", body, { 'headers': this.headers }).toPromise();
    }
    async remove(id: any) {
        await this.http.delete(URLS.URL_BASE + "/delete/" + id, {
            headers: new HttpHeaders(this.headers)
        }).toPromise();
    }


}