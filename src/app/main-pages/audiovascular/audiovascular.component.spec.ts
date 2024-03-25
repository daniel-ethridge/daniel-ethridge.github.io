import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiovascularComponent } from './audiovascular.component';

describe('AudiovascularComponent', () => {
  let component: AudiovascularComponent;
  let fixture: ComponentFixture<AudiovascularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiovascularComponent]
    });
    fixture = TestBed.createComponent(AudiovascularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
