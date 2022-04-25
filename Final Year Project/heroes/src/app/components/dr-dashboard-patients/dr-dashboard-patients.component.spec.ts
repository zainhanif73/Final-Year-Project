import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDashboardPatientsComponent } from './dr-dashboard-patients.component';

describe('DrDashboardPatientsComponent', () => {
  let component: DrDashboardPatientsComponent;
  let fixture: ComponentFixture<DrDashboardPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrDashboardPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDashboardPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
