import { Component, OnInit } from '@angular/core';
import { TokenInfo } from './game-token/token-info.interface';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public tokenInfoList!: TokenInfo[];

  constructor(private gS: GameService) {}

  ngOnInit(): void {
    this.tokenInfoList = this.gS.getTokenInfo();
  }
}
