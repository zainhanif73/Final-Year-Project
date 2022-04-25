import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardBlockedComponent } from './admin-dashboard-blocked.component';

describe('AdminDashboardBlockedComponent', () => {
  let component: AdminDashboardBlockedComponent;
  let fixture: ComponentFixture<AdminDashboardBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardBlockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
