import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetLoginComponent } from './tweet-login.component';

describe('TweetLoginComponent', () => {
  let component: TweetLoginComponent;
  let fixture: ComponentFixture<TweetLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
