
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Service from '../interfaces/Service';
import URLS from '../urls/urls';
import Buy from '../models/Buy';
import { BehaviorSubject } from 'rxjs';
import Product from '../models/Product';

@Injectable({
    providedIn: 'root'
})

export class HTTPService  {

    

    headers = { 'content-type': 'application/json' }
    model = ''
    constructor(private http: HttpClient) {
    }
    async update(url,data) {
        await this.http.put(url,data)
    }
    getAll(url:string) {
        const header=new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
        return this.http.get(url,{headers:header});
    }
    get(id: string) {
        return this.http.get(id);
    }
    async create(url,data) {

        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'content-type': 'application/json',Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) } )
        await this.http.post(url, body,
            { 'headers': headers }).toPromise();
    }
    async remove(url) {
         const headers = new HttpHeaders({ 'content-type': 'application/json',Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) } )
        await this.http.delete(url, {
            headers: headers
        }).toPromise();
    }


}