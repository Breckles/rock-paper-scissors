import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(GameComponent, { static: true })
  private gameComponent!: ComponentRef<GameComponent>;

  public gameStart = true;

  constructor(private gS: GameService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.gS.setScore();
  }

  resetGameComponent() {
    console.log('resetting game');

    this.gameStart = false;
    window.setTimeout(() => {
      this.gameStart = true;
    }, 100);
  }
}
