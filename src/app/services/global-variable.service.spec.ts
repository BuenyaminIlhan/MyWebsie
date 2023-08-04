import { TestBed } from '@angular/core/testing';

import { LegalNoticeService } from './global-variable.service';

describe('GlobalVariableService', () => {
  let service: LegalNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
