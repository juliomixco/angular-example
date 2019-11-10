import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../models/person';
import { EndpointsService } from 'app/modules/core/services';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient, private endpoints: EndpointsService) {}

  handleError(error) {
    console.error(error);
    return null;
  }

  getPeople(): Promise<Person[]> {
    return this.http
      .get<Person[]>(this.endpoints.swapi.getPeople())
      .toPromise()
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
      .get<Person>(this.endpoints.swapi.getPersonById(id))
      .toPromise()
      .catch(this.handleError);
  }

  search(term: string): Observable<Person[]> {
    let url = this.endpoints.swapi.getPeople();
    if (term && term.trim()) {
      url = this.endpoints.swapi.searchPeople(term);
    }
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.results as Person[];
      }),
    );
  }
}
