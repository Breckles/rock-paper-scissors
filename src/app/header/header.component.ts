import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logo = {
    imagePath: '../../assets/images/logo.svg',
    // imagePath: '../../assets/images/logo-bonus.svg',
    altText: 'A logo that says Rock Paper Scissors.',
  };
  public score!: number;
  private scoreChangedSubscription!: Subscription;

  constructor(private gS: GameService) {}

  ngOnInit(): void {
    this.score = this.gS.getScore();
    this.scoreChangedSubscription = this.gS.scoreChanged.subscribe(
      (newScore) => {
        this.updateScore(newScore);
      }
    );
  }

  public updateScore(newScore: number) {
    this.score = newScore;
  }
}
