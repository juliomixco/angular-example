import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../../models/person';
import { PersonService } from 'app/modules/starwars/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/modules/core/services';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
})
export class PersonDetailComponent implements OnInit {
  apiURL = '/api';
  person: Person = new Person();
  private searchfilter: BehaviorSubject<string>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private data: DataService,
    private activeRoute: ActivatedRoute,
    private personService: PersonService,
  ) {}

  ngOnInit() {
    const storedPerson = this.data.storage as Person;
    // console.log("init");
    const id = this.activeRoute.snapshot.params['id'];
    // console.log("received", id);

    if (id !== this.personService.getPersonId(storedPerson)) {
      this.personService.getPerson(id).then(person => {
        console.log('set', person);
        this.person = person;
      });
    } else {
      this.person = storedPerson;
    }
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchfilter.next(term);
  }

  selectPerson(person: Person) {
    this.data.storage = person;
    this.router.navigate(
      ['../person', this.personService.getPersonId(person)],
      { relativeTo: this.activeRoute },
    );
  }
}
