import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Config, User } from '../globals';
import { Body } from '@angular/http/src/body';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
};

@Injectable({providedIn: 'root', })
export class ControlService {
    constructor(private http: HttpClient) { }


    getUserUrl = 'https://localhost:44339/api/values/getuser';
    setUserUrl = 'https://localhost:44339/api/values/setuser';
    configUrl = 'https://localhost:44339/api/values'; // 'assets/config.json';

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getUser() {
        return this.http.get(this.getUserUrl, { responseType: 'text'});
    }

    setUser(user: string) {
        this.http.put(this.setUserUrl, user, httpOptions);

    }
}
