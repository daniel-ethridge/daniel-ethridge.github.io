import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtriComponent } from './gtri.component';

describe('GtriComponent', () => {
  let component: GtriComponent;
  let fixture: ComponentFixture<GtriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GtriComponent]
    });
    fixture = TestBed.createComponent(GtriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
