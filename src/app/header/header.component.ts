import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  openDropDownmenu() {
    document.getElementById('drop-down').style.transform = 'translateY(0)';
  }

  closeDropDown() {
    document.getElementById('drop-down').style.transform = 'translateY(-103vh)';
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
