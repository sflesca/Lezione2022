import { TestBed } from '@angular/core/testing';

import { BookManagerHTTPService } from './book-manager-http.service';

describe('BookManagerHTTPService', () => {
  let service: BookManagerHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagerHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
