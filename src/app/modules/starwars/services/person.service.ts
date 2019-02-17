import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Person } from '../models/person';
import { EndpointsService } from 'app/modules/core/services';

@Injectable()
export class PersonService {
  constructor(private http: Http, private endpoints: EndpointsService) {}

  handleError(error) {
    console.error(error);
    return null;
  }

  getPeople(): Promise<Person[]> {
    return this.http
      .get(this.endpoints.swapi.getPeople())
      .toPromise()
      .then(response => response.json().results as Person[])
      .catch(this.handleError);
  }

  getPersonId(person: Person) {
    let id = null;
    if (person && person.url) {
      const url = person.url.split('/');
      // console.log(url);
      id = url[url.length - 2];
    }
    return id;
  }

  getPerson(id: string): Promise<Person> {
    return this.http
      .get(this.endpoints.swapi.getPersonById(id))
      .toPromise()
      .then(response => response.json() as Person)
      .catch(this.handleError);
  }

  search(term: string): Observable<Person[]> {
    let url = this.endpoints.swapi.getPeople();
    if (term && term.trim()) {
      url = this.endpoints.swapi.searchPeople(term);
    }
    return this.http.get(url).pipe(
      map(response => {
        return response.json().results as Person[];
      }),
    );
  }
}
