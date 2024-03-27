import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionsComponent } from './compositions.component';

describe('CompositionsComponent', () => {
  let component: CompositionsComponent;
  let fixture: ComponentFixture<CompositionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompositionsComponent]
    });
    fixture = TestBed.createComponent(CompositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
