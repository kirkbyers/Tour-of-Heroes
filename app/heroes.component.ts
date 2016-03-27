import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: `app/heroes.component.html`,
    styleUrls:[`app/heroes.component.css`],
    directives:[HeroDetailComponent],
    providers: []

})

export class HeroesComponent implements OnInit{
    ngOnInit(){
        this.getHeroes();
    }
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes : Hero[];

  onSelect (hero: Hero) {this.selectedHero = hero};

  constructor(private _heroService: HeroService, private _router: Router) { };

  getHeroes() {
      this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

}
