import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroComponent} from './components/hero/hero.component';
import{ HeroSearchResultComponent } from './components/hero-search-result/hero-search-result.component';

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent, pathMatch: 'full'},
  { path: 'hero/:name', component: HeroComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'searchResult/:hero', component: HeroSearchResultComponent, pathMatch: 'full'},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
