import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaContentComponent } from './area-content.component';

describe('AreaContentComponent', () => {
  let component: AreaContentComponent;
  let fixture: ComponentFixture<AreaContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaContentComponent]
    });
    fixture = TestBed.createComponent(AreaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
