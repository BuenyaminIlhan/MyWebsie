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
  
    const ids = ['arrow-down', 'arrow-down1', 'arrow-down2', 'arrow-down3', 'arrow-down4'];
  
    ids.forEach(id => (document.getElementById(id)!.style.transform = 'rotate(0deg)'));
  
    setTimeout(() => {
      ids.forEach((id, i) => 
        document.getElementById(id)!.style.transform = i % 2 === 0 ? 'rotate(-150deg)' : 'rotate(150deg)'
      );
    }, 170);
  }
  
  onMouseLeave(index: number) {
    this.isHovered[index] = false;
  }
  
}
