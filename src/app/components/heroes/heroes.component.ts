import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = [];

  constructor(private _heroService:HeroService) {  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

}
