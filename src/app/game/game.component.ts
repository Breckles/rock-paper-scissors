import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
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
  @Output() playAgain = new EventEmitter<number>();

  @ViewChildren(GameTokenComponent)
  private gameTokensQueryList!: QueryList<GameTokenComponent>;
  private gameTokensArray!: GameTokenComponent[];
  private tokenElsArray: HTMLElement[] = [];

  private playerToken!: GameTokenComponent;
  private playerTokenInfo!: TokenInfo;
  private playerTokenEl!: HTMLElement;

  @ViewChild('computerToken')
  private computerToken!: GameTokenComponent;
  public computerTokenInfo!: TokenInfo;
  private computerTokenEl!: HTMLElement;

  public gameMode!: string;
  public tokenInfoList!: TokenInfo[];

  public showChoices = false;
  public showResults = false;

  public resultMessage = '';

  constructor(private gS: GameService) {}

  ngOnInit(): void {
    this.tokenInfoList = this.gS.getTokenInfo();
    this.computerTokenInfo = this.tokenInfoList[0];
    this.gameMode = this.gS.getGameMode();
  }

  ngAfterViewInit(): void {
    let tokenElRefsNodeList = document.querySelectorAll(
      '#selectionDial app-game-token'
    );
    tokenElRefsNodeList.forEach((item) => {
      this.tokenElsArray.push(item as HTMLElement);
    });
    this.gameTokensArray = this.gameTokensQueryList.toArray();

    this.computerTokenEl = document.querySelector(
      '#computerToken'
    ) as HTMLElement;
  }

  public onTokenSelected(index: number) {
    for (let i = 0; i < this.tokenElsArray.length; i++) {
      if (i === index) {
        this.tokenElsArray[i].classList.add('selected');
        this.playerTokenEl = this.tokenElsArray[i];
        this.playerTokenInfo = this.tokenInfoList[i];
        this.playerToken = this.gameTokensArray[i];
      } else {
        this.tokenElsArray[i].classList.add('hidden');
      }
    }
    (<HTMLImageElement>(
      document.querySelector('#selectionDialBackground')
    )).style.opacity = '0';
    window.setTimeout(() => {
      this.displayChoices();
    }, 1000);
  }

  private displayChoices() {
    this.showChoices = true;

    let computerChoiceBackground = document.querySelector(
      '#computerChoiceBackground'
    ) as HTMLDivElement;
    computerChoiceBackground.classList.add('visible');

    let choiceLabels = document.querySelector(
      '#choiceLabels'
    ) as HTMLDivElement;
    choiceLabels.classList.add('visible');

    this.playerTokenEl.classList.add('choiceDisplay');

    // Animations require 500ms to complete
    window.setTimeout(() => {
      this.computerSelectToken();
    }, 500);
  }

  private computerSelectToken() {
    let randomIndex = Math.floor(Math.random() * this.tokenInfoList.length);
    let computerChoice = this.tokenInfoList[randomIndex];
    console.log(computerChoice);

    let computerToken = document.querySelector('#computerToken') as HTMLElement;
    computerToken.classList.add('visible');

    let index = 0;
    let interval = window.setInterval(() => {
      this.computerTokenInfo = this.tokenInfoList[index];
      index = (index + 1) % this.tokenInfoList.length;
    }, 100);

    window.setTimeout(() => {
      window.clearInterval(interval);
      this.computerTokenInfo = computerChoice;
      this.determineResult();
    }, 2000);
  }

  private determineResult() {
    let result = this.gS.getResult(
      this.playerTokenInfo.name,
      this.computerTokenInfo.name
    );
    console.log(this.playerToken);
    console.log(this.computerToken);

    if (result === -1) {
      // player loses
      this.resultMessage = 'YOU LOSE';
      this.playerTokenEl.classList.add('loser');
      this.computerTokenEl.classList.add('winner');
      this.computerToken.triggerWinAnimation();
    } else if (result === 0) {
      // draw
      this.resultMessage = 'DRAW';
    } else {
      // player wins
      this.resultMessage = 'YOU WIN';
      this.playerTokenEl.classList.add('winner');
      this.computerTokenEl.classList.add('loser');
      this.playerToken.triggerWinAnimation();
    }
    this.showResults = true;
  }

  public onPlayAgain() {
    this.playAgain.emit(1);
  }
}
