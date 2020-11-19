import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TokenInfo } from './token-info.interface';

@Component({
  selector: 'app-game-token',
  templateUrl: './game-token.component.html',
  styleUrls: ['./game-token.component.scss'],
})
export class GameTokenComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  @Input()
  public tokenInfo!: TokenInfo;
  @ViewChild('gameTokenWrapper')
  public tokenWrapperRef!: ElementRef;
  private tokenWrapperEl!: HTMLDivElement;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tokenWrapperEl = this.tokenWrapperRef.nativeElement as HTMLDivElement;
    this.tokenWrapperEl.style.background = this.tokenInfo.borderColor;
  }

  ngAfterViewChecked(): void {
    let tokenWrapper = this.tokenWrapperRef.nativeElement as HTMLDivElement;
    tokenWrapper.style.background = this.tokenInfo.borderColor;
  }

  public triggerWinAnimation() {
    this.tokenWrapperEl.classList.add('winner');
  }
}
