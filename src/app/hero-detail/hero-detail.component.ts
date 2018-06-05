import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService }  from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    console.log("[hero-ddetail-conponent] ngOnInit ...");
    this.getHero();
    console.log("[hero-ddetail-conponent] [ngOnInit] hero="+ this.hero);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("[hero-ddetail-conponent] id==="+id);
    var retorno = this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    console.log(retorno);    
  }

  goBack(): void { 
    this.location.back();
  }
}
