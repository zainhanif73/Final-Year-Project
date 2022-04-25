import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardHospitalsComponent } from './admin-dashboard-hospitals.component';

describe('AdminDashboardHospitalsComponent', () => {
  let component: AdminDashboardHospitalsComponent;
  let fixture: ComponentFixture<AdminDashboardHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
