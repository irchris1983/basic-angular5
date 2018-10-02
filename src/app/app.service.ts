import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Globals, LoginDetails, Title } from './globals';

@Injectable({
  providedIn: 'root',
})
export class AppService {
test: Globals = {num: 234};
ID: LoginDetails = {username: '' };
title: Title = { title: '' };

  constructor() { }

  getValues(): Observable<Globals> {
    return of(this.test);
  }

  getDetails(): Observable<LoginDetails> {
    return of(this.ID);
  }

  setDetails(username: string) {
    this.ID.username = username;
  }

  setTitle(title: string) {
    this.title.title = title;
  }

  getTitle(): Observable<Title> {
    return of(this.title);
  }

}
