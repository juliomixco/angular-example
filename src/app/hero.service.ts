import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from "app/models/hero";


@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]> {
    //slow answer
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(HEROES)
      }, 1000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
