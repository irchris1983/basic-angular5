import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Globals, LoginDetails } from './globals';

@Injectable({
  providedIn: 'root',
})
export class AppService {
test: Globals = {num:234};
ID: LoginDetails;

  constructor() { }

  getValues(): Observable<Globals>{    
    return of(this.test);
  }

  getDetails(): Observable<LoginDetails>{    
    return of(this.ID);
  }
  setDetails(username) {
    this.ID.username = username;
  }
  
}