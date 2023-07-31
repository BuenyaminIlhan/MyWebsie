import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-service-scroll',
  templateUrl: './service-scroll.component.html',
  styleUrls: ['./service-scroll.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class ScrollService {
  scrollToTop(): any {
    window.scrollTo(0, 0);
  }
}
