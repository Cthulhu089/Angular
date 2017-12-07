import { Component, OnInit } from '@angular/core';
import {HeroSearchResultComponent} from '../../hero-search-result/hero-search-result.component'
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent implements OnInit {
  hero:any = {};

  constructor(private router:Router) {}

  ngOnInit() {
  }

  searchHero(hero:string) {
    this.router.navigate(['searchResult/', hero]);
  }
}
