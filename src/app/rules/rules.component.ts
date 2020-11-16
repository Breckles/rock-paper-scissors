import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  public rulesImagePath = '../../assets/images/image-rules.svg';
  private rulesDisplayEl!: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    this.rulesDisplayEl = document.querySelector(
      '#rulesDisplay'
    ) as HTMLElement;
  }

  openDisplay() {
    this.rulesDisplayEl.classList.add('open');
  }

  closeDisplay() {
    this.rulesDisplayEl.classList.remove('open');
  }
}
