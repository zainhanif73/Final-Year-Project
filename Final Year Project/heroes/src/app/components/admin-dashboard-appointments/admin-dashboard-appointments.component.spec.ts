import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardAppointmentsComponent } from './admin-dashboard-appointments.component';

describe('AdminDashboardAppointmentsComponent', () => {
  let component: AdminDashboardAppointmentsComponent;
  let fixture: ComponentFixture<AdminDashboardAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
