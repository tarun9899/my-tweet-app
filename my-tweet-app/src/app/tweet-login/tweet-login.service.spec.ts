import { TestBed } from '@angular/core/testing';
import { TweetLoginService } from './tweet-login.service';



describe('TweetLoginService', () => {
  let service: TweetLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
