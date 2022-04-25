import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPatientsComponent } from './admin-dashboard-patients.component';

describe('AdminDashboardPatientsComponent', () => {
  let component: AdminDashboardPatientsComponent;
  let fixture: ComponentFixture<AdminDashboardPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
