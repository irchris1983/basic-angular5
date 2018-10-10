import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from '../globals';

@Injectable()
export class ComponentService {
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';

    getConfig(): Observable<Config> {
    return this.http.get<Config>(this.configUrl);
    }
}
