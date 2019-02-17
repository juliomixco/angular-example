import { of as observableOf, Observable, BehaviorSubject, Subject } from 'rxjs';

import {
  catchError,
  switchMap,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person } from '../../models/person';
import { PersonService } from 'app/modules/starwars/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/modules/core/services';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  apiURL = '/api';
  people: Observable<Person[]> = observableOf<Person[]>([]);
  private searchfilter: BehaviorSubject<string>;

  constructor(
    private http: Http,
    private personService: PersonService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private data: DataService,
  ) {}

  ngOnInit() {
    this.searchfilter = new BehaviorSubject(''); // initial filter value
    this.setPersonSubject();
  }

  private setPersonSubject() {
    this.people = this.searchfilter.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap((
        term, // switch to new observable each time the term changes
      ) => this.personService.search(term)),
      catchError(error => {
        // TODO: add real error handling
        console.log(error);
        return observableOf<Person[]>([]);
      }),
    );
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchfilter.next(term);
  }

  selectPerson(person: Person) {
    this.data.storage = person;
    const id = this.personService.getPersonId(person);
    console.log(id);
    this.router.navigate(['../person', id], { relativeTo: this.activeRoute });
  }
}
