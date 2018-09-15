import { Component, OnInit } from '@angular/core';
import { GamesPageService } from './games-page.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {

  games: Array<any>;

  constructor(private gamesPageService: GamesPageService ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.gamesPageService.listar().subscribe(dados => this.games = dados);
  }

}
