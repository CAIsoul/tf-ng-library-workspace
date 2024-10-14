import { TestBed } from '@angular/core/testing';

import { ApplicationTermService } from './application-term.service';

describe('ApplicationTermService', () => {
  let service: ApplicationTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
