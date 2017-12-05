import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
 heroes:any[] = [];

  constructor(private _heroService:HeroService) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.heroes = this._heroService;
    console.log("ngOnInit");
  }

}
