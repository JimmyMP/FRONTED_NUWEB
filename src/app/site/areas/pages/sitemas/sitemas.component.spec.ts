import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemasComponent } from './sitemas.component';

describe('SitemasComponent', () => {
  let component: SitemasComponent;
  let fixture: ComponentFixture<SitemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitemasComponent]
    });
    fixture = TestBed.createComponent(SitemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
