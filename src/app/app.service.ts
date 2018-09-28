import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Globals } from './globals';

@Injectable({
  providedIn: 'root',
})
export class AppService {
    
  constructor() { }

  getValues(): Observable<number>{
    //const test: Globals = { num:12};
    const test = 5;
    return of(test);
  }
  
  
  //getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
  //  this.messageService.add('HeroService: fetched heroes');
  // return of(HEROES);
  //}
}