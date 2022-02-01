import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetResetPasswordComponent } from './tweet-reset-password.component';

describe('TweetResetPasswordComponent', () => {
  let component: TweetResetPasswordComponent;
  let fixture: ComponentFixture<TweetResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
