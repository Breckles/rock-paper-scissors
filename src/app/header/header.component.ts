import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService, GameModes } from '../game/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public logo = {
    imagePath: '../../assets/images/logo.svg',
    // imagePath: '../../assets/images/logo-bonus.svg',
    altText: 'A logo that says Rock Paper Scissors.',
    gameMode: GameModes.classic,
  };
  public score!: number;
  private scoreChangedSubscription!: Subscription;
  private gameModeChangedSubscription!: Subscription;

  constructor(private gS: GameService) {}

  ngOnInit(): void {
    this.score = this.gS.getScore();
    this.scoreChangedSubscription = this.gS.scoreChanged.subscribe(
      (newScore) => {
        this.updateScore(newScore);
      }
    );

    this.gameModeChangedSubscription = this.gS.gameModeChanged.subscribe(
      (gameMode: GameModes) => {
        if (gameMode === GameModes.classic) {
          this.logo = {
            imagePath: '../../assets/images/logo.svg',
            altText: 'A logo that says Rock Paper Scissors.',
            gameMode: GameModes.classic,
          };
        } else {
          this.logo = {
            imagePath: '../../assets/images/logo-bonus.svg',
            altText: 'A logo that says Rock Paper Scissors Lizard Spock.',
            gameMode: GameModes.alternate,
          };
        }
      }
    );
  }

  public updateScore(newScore: number) {
    this.score = newScore;
  }

  ngOnDestroy() {
    this.scoreChangedSubscription.unsubscribe();
    this.gameModeChangedSubscription.unsubscribe();
  }
}
