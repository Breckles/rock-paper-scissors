import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TokenInfo } from './token-info.interface';

@Component({
  selector: 'app-game-token',
  templateUrl: './game-token.component.html',
  styleUrls: ['./game-token.component.scss'],
})
export class GameTokenComponent implements OnInit, AfterViewInit {
  @Input()
  public tokenInfo!: TokenInfo;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let el = document.querySelector('.gameTokenWrapper') as HTMLDivElement;
    console.log(this.tokenInfo.borderColor);

    el.style.background = this.tokenInfo.borderColor;
  }
}
