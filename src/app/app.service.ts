import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Globals, LoginDetails, Title } from './globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
test: Globals = {num: 234};
ID: LoginDetails = {username: '' };
title: Title = { title: '' };

  constructor(private http: HttpClient) { }

  testAPI() {
    return this.http.get('/api/food');
  }

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
