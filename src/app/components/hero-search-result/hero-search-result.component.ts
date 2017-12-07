import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../../services/heroes.service';
@Component({
  selector: 'app-hero-search-result',
  templateUrl: './hero-search-result.component.html'
})
export class HeroSearchResultComponent implements OnInit {

  hero:any = {};
  find:boolean = false;
  showErrorMeesage = true;
  heroSearch:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroService:HeroService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.hero = this._heroService.getHeroByName(params['hero']);
    this.heroSearch = params['hero'];

    if (this.hero != undefined) {
      this.find = true;
      this.showErrorMeesage = false;
    }
  });
  }
}
