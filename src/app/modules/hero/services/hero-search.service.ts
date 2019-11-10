import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from 'app/modules/core/models/hero';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`);
  }
}
