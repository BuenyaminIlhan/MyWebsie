import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegalNoticeService {
  private legalNoticeVisibleSubject = new BehaviorSubject<boolean>(false);
  legalNoticeVisible$ = this.legalNoticeVisibleSubject.asObservable();

  setLegalNoticeVisible(visible: boolean): void {
    this.legalNoticeVisibleSubject.next(visible);
  }
}
