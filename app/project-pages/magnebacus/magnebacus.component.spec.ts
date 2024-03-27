import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnebacusComponent } from './magnebacus.component';

describe('MagnebacusComponent', () => {
  let component: MagnebacusComponent;
  let fixture: ComponentFixture<MagnebacusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagnebacusComponent]
    });
    fixture = TestBed.createComponent(MagnebacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
