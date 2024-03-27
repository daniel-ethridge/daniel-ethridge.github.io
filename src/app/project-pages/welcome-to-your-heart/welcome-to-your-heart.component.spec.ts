import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToYourHeartComponent } from './welcome-to-your-heart.component';

describe('WelcomeToYourHeartComponent', () => {
  let component: WelcomeToYourHeartComponent;
  let fixture: ComponentFixture<WelcomeToYourHeartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeToYourHeartComponent]
    });
    fixture = TestBed.createComponent(WelcomeToYourHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
