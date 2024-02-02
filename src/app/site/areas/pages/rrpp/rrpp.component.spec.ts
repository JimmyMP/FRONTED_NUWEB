import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrppComponent } from './rrpp.component';

describe('RrppComponent', () => {
  let component: RrppComponent;
  let fixture: ComponentFixture<RrppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrppComponent]
    });
    fixture = TestBed.createComponent(RrppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
