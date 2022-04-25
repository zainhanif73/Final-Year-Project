import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLabsAddComponent } from './admin-dashboard-labs-add.component';

describe('AdminDashboardLabsAddComponent', () => {
  let component: AdminDashboardLabsAddComponent;
  let fixture: ComponentFixture<AdminDashboardLabsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLabsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardLabsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
