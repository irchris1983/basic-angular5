import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '../globals';

@Injectable({providedIn: 'root', })
export class ControlService {
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';
    // configUrl = './Projects/config.json';

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }
}
