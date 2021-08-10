import { TestBed } from '@angular/core/testing';

import { FeedServiceService } from './feed-service.ts';

describe('FeedServiceService', () => {
  let service: FeedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
