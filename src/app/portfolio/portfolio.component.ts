import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  isHovered = [false, false, false];

  onMouseEnter(index: number) {
    this.isHovered[index] = true;

  }

  onMouseLeave(index: number) {
    this.isHovered[index] = false;
  }
}
