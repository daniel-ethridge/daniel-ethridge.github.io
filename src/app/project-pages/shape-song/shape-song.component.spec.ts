import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeSongComponent } from './shape-song.component';

describe('ShapeSongComponent', () => {
  let component: ShapeSongComponent;
  let fixture: ComponentFixture<ShapeSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShapeSongComponent]
    });
    fixture = TestBed.createComponent(ShapeSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
