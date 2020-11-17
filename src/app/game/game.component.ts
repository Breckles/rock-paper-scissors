import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { GameTokenComponent } from './game-token/game-token.component';
import { TokenInfo } from './game-token/token-info.interface';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, AfterViewInit {
  public tokenInfoList!: TokenInfo[];

  @ViewChildren(GameTokenComponent)
  private gameTokensQueryList!: QueryList<GameTokenComponent>;
  private gameTokensArray!: GameTokenComponent[];

  constructor(private gS: GameService) {}

  ngOnInit(): void {
    this.tokenInfoList = this.gS.getTokenInfo();
  }

  ngAfterViewInit(): void {
    this.gameTokensArray = this.gameTokensQueryList.toArray();
    // this.gameTokensArray[0].
  }
}
