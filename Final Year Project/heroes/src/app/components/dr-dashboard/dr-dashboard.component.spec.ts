import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDashboardComponent } from './dr-dashboard.component';

describe('DrDashboardComponent', () => {
  let component: DrDashboardComponent;
  let fixture: ComponentFixture<DrDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
