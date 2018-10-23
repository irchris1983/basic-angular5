import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config, User } from '../globals';

@Injectable({providedIn: 'root', })
export class ControlService {
    constructor(private http: HttpClient) { }

    userUrl = 'https://localhost:44339/api/values/getuser/chrismarie';
    configUrl = 'https://localhost:44339/api/values'; // 'assets/config.json';

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getUser() {
        return this.http.get<User>(this.userUrl);
    }
}
