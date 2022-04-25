import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDoctorsComponent } from './admin-dashboard-doctors.component';

describe('AdminDashboardDoctorsComponent', () => {
  let component: AdminDashboardDoctorsComponent;
  let fixture: ComponentFixture<AdminDashboardDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
