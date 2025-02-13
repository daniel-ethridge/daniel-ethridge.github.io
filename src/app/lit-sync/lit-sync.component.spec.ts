import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitSyncComponent } from './lit-sync.component';

describe('LitSyncComponent', () => {
  let component: LitSyncComponent;
  let fixture: ComponentFixture<LitSyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitSyncComponent]
    });
    fixture = TestBed.createComponent(LitSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
