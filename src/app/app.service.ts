import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Globals, LoginDetails, Title, Config } from './globals';

@Injectable({
  providedIn: 'root',
})
export class AppService {
test: Globals = {num: 234};
ID: LoginDetails = {username: '' };
title: Title = { title: '' };

  constructor(private http: HttpClient) { }

  // configUrl = 'assets/config.json';

  // getConfig() {
  // return this.http.get<Config>(this.configUrl);
  // }

  setTitle(title: string) {
    this.title.title = title;
  }

  getTitle(): Observable<Title> {
    return of(this.title);
  }

  getValues(): Observable<Globals> {
    return of(this.test);
  }

  getDetails(): Observable<LoginDetails> {
    return of(this.ID);
  }

  setDetails(username: string) {
    this.ID.username = username;
  }


}
