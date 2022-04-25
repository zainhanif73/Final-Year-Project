import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardHospitalAddComponent } from './admin-dashboard-hospital-add.component';

describe('AdminDashboardHospitalAddComponent', () => {
  let component: AdminDashboardHospitalAddComponent;
  let fixture: ComponentFixture<AdminDashboardHospitalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardHospitalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardHospitalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
