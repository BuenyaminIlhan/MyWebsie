import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LegalNoticeService } from '../services/global-variable.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {
  hide: boolean = false;
  private legalNoticeSubscription: Subscription;

  constructor(private legalNoticeService: LegalNoticeService) {
    this.legalNoticeSubscription = this.legalNoticeService.legalNoticeVisible$.subscribe((visible) => {
      this.hide = visible;
    });
  }

  ngOnDestroy(): void {
    this.legalNoticeSubscription.unsubscribe();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
