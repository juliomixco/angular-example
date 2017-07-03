import { Component, OnInit } from '@angular/core';
import { HeroService } from "app/hero.service";
import { Hero } from "app/models/hero";

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
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
}
