import { TestBed } from '@angular/core/testing';

import { NgxTfLibraryService } from './ngx-tf-library.service';

describe('NgxTfLibraryService', () => {
  let service: NgxTfLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTfLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
