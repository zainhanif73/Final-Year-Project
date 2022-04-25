import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLabsComponent } from './admin-dashboard-labs.component';

describe('AdminDashboardLabsComponent', () => {
  let component: AdminDashboardLabsComponent;
  let fixture: ComponentFixture<AdminDashboardLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
