import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardBlockeddoctorsComponent } from './admin-dashboard-blockeddoctors.component';

describe('AdminDashboardBlockeddoctorsComponent', () => {
  let component: AdminDashboardBlockeddoctorsComponent;
  let fixture: ComponentFixture<AdminDashboardBlockeddoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardBlockeddoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardBlockeddoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
