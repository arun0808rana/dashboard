import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPillsComponent } from './box-pills.component';

describe('BoxPillsComponent', () => {
  let component: BoxPillsComponent;
  let fixture: ComponentFixture<BoxPillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
