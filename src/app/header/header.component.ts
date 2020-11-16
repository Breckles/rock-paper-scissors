import { Component, OnInit } from '@angular/core';

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
  public currentScore = 12;

  constructor() {}

  ngOnInit(): void {}
}
