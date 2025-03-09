import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicEmotionComponent } from './music-emotion.component';

describe('MusicEmotionComponent', () => {
  let component: MusicEmotionComponent;
  let fixture: ComponentFixture<MusicEmotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicEmotionComponent]
    });
    fixture = TestBed.createComponent(MusicEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
