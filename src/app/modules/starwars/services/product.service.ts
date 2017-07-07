import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Person } from "../models/person";
import { EndpointsService } from "app/modules/core/services/endoints.service";

@Injectable()
export class SwapiService {


  constructor(private http: Http, private endpoints: EndpointsService) {

  }

  handleError(error) {
    console.error(error);
  }

  getPeople(): Promise<Person[]> {
    return this.http.get(this.endpoints.store.products())
      .toPromise()
      .then(response => response.json() as Person[])
      .catch(this.handleError);
  }

  getPerson(id: String): Promise<Person> {
    return this.http.get(this.endpoints.store.productById(id))
      .toPromise()
      .then(response => response.json() as Person)
      .catch(this.handleError);
  }

  search(term: string): Observable<Person[]> {
    var url = this.endpoints.store.products();
    if (term.trim()) {
      url = `${this.endpoints.store.products()}?name=${term}`;

    }
    console.log(url);
    return this.http.get(url)
      .map(response => response.json() as Person[]);
  }

}