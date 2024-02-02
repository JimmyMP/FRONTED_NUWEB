import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GthComponent } from './gth.component';

describe('GthComponent', () => {
  let component: GthComponent;
  let fixture: ComponentFixture<GthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GthComponent]
    });
    fixture = TestBed.createComponent(GthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
