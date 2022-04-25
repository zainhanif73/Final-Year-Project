import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDoctorsProfileComponent } from './admin-dashboard-doctors-profile.component';

describe('AdminDashboardDoctorsProfileComponent', () => {
  let component: AdminDashboardDoctorsProfileComponent;
  let fixture: ComponentFixture<AdminDashboardDoctorsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardDoctorsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardDoctorsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
