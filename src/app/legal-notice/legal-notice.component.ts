import { Component, OnInit } from '@angular/core';
import { LegalNoticeService } from '../services/global-variable.service';


@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(private legalNoticeService: LegalNoticeService) { }

  ngOnInit(): void {
    this.legalNoticeService.setLegalNoticeVisible(true);
  }

  ngOnDestroy(): void {
    this.legalNoticeService.setLegalNoticeVisible(false);
  }
}
