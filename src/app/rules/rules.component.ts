import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameModes, GameService } from '../game/game.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  private rulesImagePaths = new Map();
  public rulesImagePath!: string;

  private gameModeChangedSubscription = new Subscription();

  private rulesWrapperEl!: HTMLElement;
  private rulesDisplayEl!: HTMLElement;

  constructor(private gS: GameService) {}

  ngOnInit(): void {
    this.rulesWrapperEl = document.querySelector(
      '#rulesWrapper'
    ) as HTMLElement;
    this.rulesDisplayEl = document.querySelector(
      '#rulesDisplay'
    ) as HTMLElement;

    window.addEventListener('click', (event: MouseEvent) => {
      if (!this.rulesDisplayEl.contains(<Node>event.target)) {
        this.hideRules(event);
      }
    });

    this.rulesImagePaths.set(
      GameModes.classic,
      '../../assets/images/image-rules.svg'
    );
    this.rulesImagePaths.set(
      GameModes.alternate,
      '../../assets/images/image-rules-bonus.svg'
    );

    this.rulesImagePath = this.rulesImagePaths.get(GameModes.classic);

    this.gameModeChangedSubscription = this.gS.gameModeChanged.subscribe(
      (gameMode: GameModes) => {
        this.rulesImagePath = this.rulesImagePaths.get(gameMode);
      }
    );
  }

  showRules(event: MouseEvent) {
    event.stopPropagation();
    this.rulesWrapperEl.classList.add('showRules');
  }

  hideRules(event: MouseEvent) {
    event.stopPropagation();
    this.rulesWrapperEl.classList.remove('showRules');
  }
}
