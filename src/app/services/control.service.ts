import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Service } from '../globals';

@Injectable({providedIn: 'root', })
export class ControlService {
    constructor(private http: HttpClient) { }

    configUrl = 'https://localhost:44339/api/values';
    // configUrl = 'assets/config.json';

    getConfig() {
        return this.http.get<Service>(this.configUrl);
        // return this.http.get<Config>(this.configUrl);
    }
}
