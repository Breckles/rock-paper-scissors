import {
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
export class GameTokenComponent implements OnInit, AfterViewInit {
  @Input()
  public tokenInfo!: TokenInfo;
  @ViewChild('gameTokenWrapper')
  public tokenWrapperRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let tokenWrapper = this.tokenWrapperRef.nativeElement as HTMLDivElement;
    tokenWrapper.style.background = this.tokenInfo.borderColor;
  }
}
