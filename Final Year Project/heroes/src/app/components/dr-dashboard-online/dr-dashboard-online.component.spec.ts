import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDashboardOnlineComponent } from './dr-dashboard-online.component';

describe('DrDashboardOnlineComponent', () => {
  let component: DrDashboardOnlineComponent;
  let fixture: ComponentFixture<DrDashboardOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrDashboardOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDashboardOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
