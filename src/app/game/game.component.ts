import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private playMode = 'classic';
  public moveIconPaths = [
    '../../assets/images/icon-rock.svg',
    '../../assets/images/icon-paper.svg',
    '../../assets/images/icon-scissors.svg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
