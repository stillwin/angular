import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any [] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService) {

}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
    }
    )
  }

}
