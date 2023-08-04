import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  openDropDownmenu() {
    document.getElementById('drop-down').style.transform = 'translateY(0)';
    document.getElementById('menu').style.visibility = 'visible';
  }

  closeDropDown() {
    document.getElementById('drop-down').style.transform = 'translateY(-103vh)';
    document.getElementById('menu').style.visibility = 'hidden';
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  onMouseEnter() {
    const burgerIcon = document.getElementById('burger-icon') as HTMLImageElement;
    burgerIcon.src = './assets/img/burger_onhover.svg';

  }

  onMouseLeave() {
    const burgerIcon = document.getElementById('burger-icon') as HTMLImageElement;
    burgerIcon.src = './assets/img/burger menu S3.svg';
  }


}
