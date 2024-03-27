import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteronesiaComponent } from './anteronesia.component';

describe('AnteronesiaComponent', () => {
  let component: AnteronesiaComponent;
  let fixture: ComponentFixture<AnteronesiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnteronesiaComponent]
    });
    fixture = TestBed.createComponent(AnteronesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
