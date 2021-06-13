import { TestBed } from '@angular/core/testing';

import { FilesInterestService } from './files-interest.service';

describe('FilesInterestService', () => {
  let service: FilesInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
