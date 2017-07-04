import { Component, OnInit } from '@angular/core';
import { HeroService } from "app/hero.service";
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
}
