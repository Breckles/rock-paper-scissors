import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenInfo } from './game-token/token-info.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameMode: GameModes = GameModes.classic;
  private classicTokenInfo: TokenInfo[] = [
    {
      name: ValidMoves.rock,
      iconPath: '../../assets/images/icon-rock.svg',
      borderColor:
        'linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      altText: 'The hand symbol for rock.',
    },
    {
      name: ValidMoves.paper,
      iconPath: '../../assets/images/icon-paper.svg',
      borderColor:
        'linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      altText: 'The hand symbol for paper.',
    },
    {
      name: ValidMoves.scissors,
      iconPath: '../../assets/images/icon-scissors.svg',
      borderColor:
        'linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      altText: 'The hand symbol for scissors.',
    },
  ];
  private alternateTokenInfo: TokenInfo[] = [
    {
      name: ValidMoves.rock,
      iconPath: '../../assets/images/icon-rock.svg',
      borderColor:
        'linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      altText: 'The hand symbol for rock.',
    },
    {
      name: ValidMoves.paper,
      iconPath: '../../assets/images/icon-paper.svg',
      borderColor:
        'linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      altText: 'The hand symbol for paper.',
    },
    {
      name: ValidMoves.scissors,
      iconPath: '../../assets/images/icon-scissors.svg',
      borderColor:
        'linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      altText: 'The hand symbol for scissors.',
    },
    {
      name: ValidMoves.lizard,
      iconPath: '../../assets/images/icon-lizard.svg',
      borderColor:
        'linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
      altText: 'The hand symbol for lizard.',
    },
    {
      name: ValidMoves.spock,
      iconPath: '../../assets/images/icon-spock.svg',
      borderColor:
        'linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      altText: 'The hand symbol for spock.',
    },
  ];
  private tokenInfo = {
    classic: this.classicTokenInfo,
    alternate: this.alternateTokenInfo,
  };

  private sessionStorage = window.sessionStorage;
  private currentScore = +this.sessionStorage.getItem('score')!;

  public scoreChanged = new Subject<number>();
  public gameModeChanged = new Subject<GameModes>();

  // resultMatrix[userPick][computerPick] will return result from player
  // perspective.
  // -1 = player loses
  // 0 = draw
  // 1 = player wins
  // eg. classicResultMatrix[rock][paper] = -1 = player loses
  private resultMatrix = {
    rock: { rock: 0, paper: -1, scissors: 1, lizard: 1, spock: -1 },
    paper: { rock: 1, paper: 0, scissors: -1, lizard: -1, spock: 1 },
    scissors: { rock: -1, paper: 1, scissors: 0, lizard: 1, spock: -1 },
    lizard: { rock: -1, paper: 1, scissors: -1, lizard: 0, spock: 1 },
    spock: { rock: 1, paper: -1, scissors: 1, lizard: -1, spock: 0 },
  };

  constructor() {}

  public getTokenInfo() {
    return [...this.tokenInfo[this.gameMode]];
  }

  public getGameMode() {
    return this.gameMode;
  }

  public changeGameMode() {
    if (this.gameMode === GameModes.classic) {
      this.gameMode = GameModes.alternate;
    } else {
      this.gameMode = GameModes.classic;
    }

    this.currentScore = 0;
    this.scoreChanged.next(this.currentScore);
    this.gameModeChanged.next(this.gameMode);
  }

  /**
   * Determines the winner given player and computer inputs
   * @param {string} playerChoice
   * @param {string} computerChoice
   * @returns {number} -1 if playerChoice loses, 0 for a draw, and 1 if playerChoice wins
   */
  public getResult(playerChoice: ValidMoves, computerChoice: ValidMoves) {
    let result = this.resultMatrix[playerChoice][computerChoice];
    this.currentScore += result;
    if (this.currentScore < 0) {
      this.currentScore = 0;
    }
    this.scoreChanged.next(this.currentScore);
    this.sessionStorage.setItem('score', this.currentScore.toString());
    return result;
  }

  public setScore(newScore?: number) {
    if (newScore) {
      this.currentScore = newScore;
    } else {
      let sessionScore = +sessionStorage.getItem('score')!;

      if (sessionScore) {
        this.currentScore = sessionScore;
      }
    }

    this.scoreChanged.next(this.currentScore);
  }

  public getScore() {
    return this.currentScore;
  }
}

export enum ValidMoves {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
  lizard = 'lizard',
  spock = 'spock',
}

export enum GameModes {
  classic = 'classic',
  alternate = 'alternate',
}
