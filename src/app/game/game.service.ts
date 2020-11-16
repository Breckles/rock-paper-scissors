import { Injectable } from '@angular/core';
import { TokenInfo } from './game-token/token-info.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private playMode: 'classic' | 'alternate' = 'classic';
  private classicTokenInfo: TokenInfo[] = [
    {
      name: 'rock',
      iconPath: '../../assets/images/icon-rock.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      altText: 'The hand symbol for rock.',
    },
    {
      name: 'paper',
      iconPath: '../../assets/images/icon-paper.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      altText: 'The hand symbol for paper.',
    },
    {
      name: 'scissors',
      iconPath: '../../assets/images/icon-scissors.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      altText: 'The hand symbol for scissors.',
    },
  ];
  private alternateTokenInfo: TokenInfo[] = [
    {
      name: 'rock',
      iconPath: '../../assets/images/icon-rock.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      altText: 'The hand symbol for rock.',
    },
    {
      name: 'paper',
      iconPath: '../../assets/images/icon-paper.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      altText: 'The hand symbol for paper.',
    },
    {
      name: 'scissors',
      iconPath: '../../assets/images/icon-scissors.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      altText: 'The hand symbol for scissors.',
    },
    {
      name: 'lizard',
      iconPath: '../../assets/images/icon-lizard.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
      altText: 'The hand symbol for lizard.',
    },
    {
      name: 'spock',
      iconPath: '../../assets/images/icon-spock.svg',
      borderColor:
        'linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      altText: 'The hand symbol for spock.',
    },
  ];
  private tokenInfo = {
    classic: this.classicTokenInfo,
    alternate: this.alternateTokenInfo,
  };

  constructor() {}

  public getTokenInfo() {
    return [...this.tokenInfo[this.playMode]];
  }
}
