import { Component, OnInit } from '@angular/core';
import { Hero } from "app/modules/core/models/hero";
import { HeroService } from '../../services';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes.slice(1, 5);
    })
  }

}
