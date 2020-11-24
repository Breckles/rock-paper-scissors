import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { GameModes, GameService } from './game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('gameModeToggleDot', { static: true })
  private gameModeToggleDotElRef!: ElementRef;
  private gameModeToggleDotEl!: HTMLElement;

  public gameStart = true;

  constructor(private gS: GameService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.gS.setScore();
    this.gameModeToggleDotEl = this.gameModeToggleDotElRef
      .nativeElement as HTMLElement;
  }

  public resetGameComponent() {
    this.gameStart = false;
    window.setTimeout(() => {
      this.gameStart = true;
    }, 100);
  }

  public toggleGameMode() {
    this.gS.changeGameMode();
    this.resetGameComponent();

    if (this.gameModeToggleDotEl.classList.contains('classicMode')) {
      this.gameModeToggleDotEl.classList.remove('classicMode');
      this.gameModeToggleDotEl.classList.add('alternateMode');
    } else {
      this.gameModeToggleDotEl.classList.remove('alternateMode');
      this.gameModeToggleDotEl.classList.add('classicMode');
    }
  }
}
