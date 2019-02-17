import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { Hero } from 'app/modules/core/models/hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`api/heroes/?name=${term}`)
      .pipe(map(response => response.json().data as Hero[]));
  }
}
