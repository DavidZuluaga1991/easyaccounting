import { TestBed } from '@angular/core/testing';

import { TaxCalendarService } from './tax-calendar.service';

describe('TaxCalendarService', () => {
  let service: TaxCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
