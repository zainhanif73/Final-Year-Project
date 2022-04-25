import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDashboardProfileComponent } from './dr-dashboard-profile.component';

describe('DrDashboardProfileComponent', () => {
  let component: DrDashboardProfileComponent;
  let fixture: ComponentFixture<DrDashboardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrDashboardProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
