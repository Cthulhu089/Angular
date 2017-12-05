import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//ROUTES
import { APP_ROUTING } from './app.routes'

//SERVICES
import { HeroService } from "./services/heroes.service";

//components
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/shared/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
