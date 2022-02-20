import { TestBed } from '@angular/core/testing';

import { TweetHomeService } from './tweet-home.service';

describe('TweetHomeService', () => {
  let service: TweetHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
