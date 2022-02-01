import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetRegistrationComponent } from './tweet-registration.component';

describe('TweetRegistrationComponent', () => {
  let component: TweetRegistrationComponent;
  let fixture: ComponentFixture<TweetRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
