import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Config } from '../globals';

@Injectable()
export class ComponentService {
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';

    getConfig() {
    return this.http.get<Config>(this.configUrl);
    }
}
