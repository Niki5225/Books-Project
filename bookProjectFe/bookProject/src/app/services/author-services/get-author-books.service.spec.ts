import { TestBed } from '@angular/core/testing';

import { GetAuthorBooksService } from './get-author-books.service';

describe('GetAuthorBooksService', () => {
  let service: GetAuthorBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAuthorBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
