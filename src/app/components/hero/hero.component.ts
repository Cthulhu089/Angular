import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroService } from '../../services/heroes.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroService:HeroService) {

    this.activatedRoute.params.subscribe( params => {
          this.hero = this._heroService.getHeroByName(params['name']);
    })

  }

}
