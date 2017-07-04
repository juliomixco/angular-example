import { Component, OnInit } from '@angular/core';
import { HeroService } from "app/service/hero.service";
import { Hero } from "app/models/hero";
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;
  constructor(private router: Router, private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;

    })
  }
  onSelect(hero) {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: String) {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
