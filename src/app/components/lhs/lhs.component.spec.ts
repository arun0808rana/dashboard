import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LHSComponent } from './lhs.component';

describe('LHSComponent', () => {
  let component: LHSComponent;
  let fixture: ComponentFixture<LHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LHSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
