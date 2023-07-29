import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showDiv = false;

  openDropDownmenu() {
    this.showDiv = true;
  }

  closeDropDown() {
    this.showDiv = false;
  }
}
