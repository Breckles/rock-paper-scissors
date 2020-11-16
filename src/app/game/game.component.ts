import { Component, OnInit } from '@angular/core';
import { TokenInfo } from './game-token/token-info.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private playMode = 'classic';
  public tokenInfo: TokenInfo = {
    name: 'rock',
    iconPath: '../../assets/images/icon-rock.svg',
    borderColor:
      'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
    altText: 'The hand symbol for rock.',
  };

  constructor() {}

  ngOnInit(): void {}
}
