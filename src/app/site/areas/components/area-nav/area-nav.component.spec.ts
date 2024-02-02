import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNavComponent } from './area-nav.component';

describe('AreaNavComponent', () => {
  let component: AreaNavComponent;
  let fixture: ComponentFixture<AreaNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaNavComponent]
    });
    fixture = TestBed.createComponent(AreaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
