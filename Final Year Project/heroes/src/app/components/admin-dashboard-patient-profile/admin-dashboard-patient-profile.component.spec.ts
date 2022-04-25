import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPatientProfileComponent } from './admin-dashboard-patient-profile.component';

describe('AdminDashboardPatientProfileComponent', () => {
  let component: AdminDashboardPatientProfileComponent;
  let fixture: ComponentFixture<AdminDashboardPatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardPatientProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
