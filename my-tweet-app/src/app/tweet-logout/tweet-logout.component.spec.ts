import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetLogoutComponent } from './tweet-logout.component';

describe('TweetLogoutComponent', () => {
  let component: TweetLogoutComponent;
  let fixture: ComponentFixture<TweetLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
