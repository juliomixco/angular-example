import { Injectable } from '@angular/core';

import { Hero } from 'app/modules/core/models/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .toPromise()
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http
      .get<Hero>(url)
      .toPromise()
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, JSON.stringify({ name: name }), {
        headers: this.headers,
      })
      .toPromise()
      .catch(this.handleError);
  }
  delete(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http
      .delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
