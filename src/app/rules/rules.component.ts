import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  public rulesImagePath = '../../assets/images/image-rules.svg';
  private rulesWrapperEl!: HTMLElement;
  private rulesDisplayEl!: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    this.rulesWrapperEl = document.querySelector(
      '#rulesWrapper'
    ) as HTMLElement;
    this.rulesDisplayEl = document.querySelector(
      '#rulesDisplay'
    ) as HTMLElement;

    window.addEventListener('click', (event: MouseEvent) => {
      if (!this.rulesDisplayEl.contains(<Node>event.target)) {
        this.hideRules(event);
      }
    });
  }

  showRules(event: MouseEvent) {
    event.stopPropagation();
    this.rulesWrapperEl.classList.add('showRules');
  }

  hideRules(event: MouseEvent) {
    event.stopPropagation();
    this.rulesWrapperEl.classList.remove('showRules');
  }
}
