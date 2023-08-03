import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('startAnimation', [
      transition(':enter', [style({ transform: 'rotate(150deg)' }), animate('515ms')])
    ])
  ]
})
export class PortfolioComponent {
  isHovered = [false, false, false];

  onMouseEnter(index: number) {
    this.isHovered[index] = true;
    setTimeout(() => {
      document.getElementById('arrow-down').style.transform = 'rotate(150deg)';
      document.getElementById('arrow-down2').style.transform = 'rotate(-150deg)';
      document.getElementById('arrow-down3').style.transform = 'rotate(-150deg)';
    }, 170);
    document.getElementById('arrow-down').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-down2').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-down3').style.transform = 'rotate(0deg)';
  }

  onMouseLeave(index: number) {
    this.isHovered[index] = false;
  }
}
