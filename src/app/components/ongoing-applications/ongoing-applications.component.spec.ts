import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingApplicationsComponent } from './ongoing-applications.component';

describe('OngoingApplicationsComponent', () => {
  let component: OngoingApplicationsComponent;
  let fixture: ComponentFixture<OngoingApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
