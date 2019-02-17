import { of as observableOf, Observable, Subject } from 'rxjs';

import {
  catchError,
  switchMap,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Observable class extensions

// Observable operators

import { Hero } from 'app/modules/core/models/hero';
import { HeroService, HeroSearchService } from '../../services';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService],
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(term =>
        term // switch to new observable each time the term changes
          ? // return the http search observable
            this.heroSearchService.search(term)
          : // or the observable of empty heroes if there was no search term
            observableOf<Hero[]>([]),
      ),
      catchError(error => {
        // TODO: add real error handling
        console.log(error);
        return observableOf<Hero[]>([]);
      }),
    );
  }

  gotoDetail(hero: Hero): void {
    const link = ['../detail', hero.id];
    this.router.navigate(link, { relativeTo: this.activeRoute });
  }
}
