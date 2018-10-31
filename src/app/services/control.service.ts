import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Config, LoginDetails } from '../globals';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

// const baseUrl = 'https://localhost:44339/api/values/';

@Injectable({providedIn: 'root', })
export class ControlService {
    constructor(private http: HttpClient) { }

    getUserUrl = 'https://localhost:44339/api/values/getuser';
    setUserUrl = 'https://localhost:44339/api/values/setuser/';
    configUrl = 'https://localhost:44339/api/values/'; // 'assets/config.json';

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getUser() {
        return this.http.get<LoginDetails>(this.getUserUrl);
    }

    setUser(user: string) {
        this.http.put<string>(this.setUserUrl + user, httpOptions).subscribe( );
    }
}
