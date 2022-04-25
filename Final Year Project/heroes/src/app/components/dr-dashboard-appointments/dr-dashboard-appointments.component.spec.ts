import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDashboardAppointmentsComponent } from './dr-dashboard-appointments.component';

describe('DrDashboardAppointmentsComponent', () => {
  let component: DrDashboardAppointmentsComponent;
  let fixture: ComponentFixture<DrDashboardAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrDashboardAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDashboardAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
